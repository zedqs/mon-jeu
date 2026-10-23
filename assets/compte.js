/* ============================================================
   ZedJeux — Comptes utilisateurs (100 % local, sans serveur)
   Les comptes sont stockés dans le navigateur (localStorage) :
   ils sont propres à cet appareil / ce navigateur.
   ============================================================ */
(function () {
  const USERS_KEY = 'zj_users_v1';
  const SESSION_KEY = 'zj_session_v1';
  const COMMENTS_KEY = 'zj_comments_v1';
  const LIKES_KEY = 'zj_likes_v1';
  const ANON_FAVS = 'zedjeux-favs';      // legacy / visiteurs
  const ANON_HISTORY = 'zj_history_anon';

  const AVATARS = ['🦊', '🐼', '🦁', '🐸', '🦄', '🐙', '🤖', '👾', '🦖', '🐯', '🐨', '🦉', '🐧', '🦩', '🐲'];

  const load = (k, def) => { try { return JSON.parse(localStorage.getItem(k)) ?? def; } catch { return def; } };
  const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));

  async function hashPass(pseudo, pass) {
    const str = pseudo.toLowerCase() + '::' + pass;
    if (crypto && crypto.subtle) {
      const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
      return 's256:' + [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
    }
    // Repli si le contexte n'est pas sécurisé (fichier local) : hachage simple non cryptographique
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0; i < str.length; i++) {
      const ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761); h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    return 'fnv:' + (h1 >>> 0).toString(16) + (h2 >>> 0).toString(16);
  }

  function getUsers() { return load(USERS_KEY, {}); }
  function currentPseudo() { return localStorage.getItem(SESSION_KEY) || null; }
  function currentUser() {
    const p = currentPseudo();
    if (!p) return null;
    const u = getUsers()[p];
    return u ? { pseudo: p, ...u } : null;
  }
  function updateUser(patch) {
    const p = currentPseudo(); if (!p) return;
    const users = getUsers();
    users[p] = { ...users[p], ...patch };
    save(USERS_KEY, users);
  }

  async function register(pseudo, pass, avatar) {
    pseudo = pseudo.trim();
    if (pseudo.length < 3) throw new Error('Le pseudo doit faire au moins 3 caractères.');
    if (!/^[a-zA-Z0-9_À-ÿ -]+$/.test(pseudo)) throw new Error('Pseudo : lettres, chiffres, espaces, - et _ seulement.');
    if (pass.length < 4) throw new Error('Mot de passe trop court (4 caractères minimum).');
    const users = getUsers();
    if (Object.keys(users).some(k => k.toLowerCase() === pseudo.toLowerCase()))
      throw new Error('Ce pseudo est déjà pris sur cet appareil.');
    users[pseudo] = {
      passHash: await hashPass(pseudo, pass),
      avatar: avatar || AVATARS[0],
      created: Date.now(),
      // le nouveau compte récupère les favoris / l'historique du mode visiteur
      favs: load(ANON_FAVS, []),
      history: load(ANON_HISTORY, []),
      likes: {}
    };
    save(USERS_KEY, users);
    localStorage.setItem(SESSION_KEY, pseudo);
    return currentUser();
  }

  async function login(pseudo, pass) {
    const users = getUsers();
    const key = Object.keys(users).find(k => k.toLowerCase() === pseudo.trim().toLowerCase());
    if (!key) throw new Error('Aucun compte avec ce pseudo sur cet appareil.');
    if (users[key].passHash !== await hashPass(key, pass)) throw new Error('Mot de passe incorrect.');
    localStorage.setItem(SESSION_KEY, key);
    return currentUser();
  }

  function logout() { localStorage.removeItem(SESSION_KEY); }

  function deleteAccount() {
    const p = currentPseudo(); if (!p) return;
    const users = getUsers(); delete users[p]; save(USERS_KEY, users);
    logout();
  }

  /* ---------- Favoris & historique (compte ou visiteur) ---------- */
  function getFavs() {
    const u = currentUser();
    return new Set(u ? u.favs : load(ANON_FAVS, []));
  }
  function isFav(id) { return getFavs().has(id); }
  function toggleFav(id) {
    const favs = getFavs();
    favs.has(id) ? favs.delete(id) : favs.add(id);
    if (currentPseudo()) updateUser({ favs: [...favs] });
    else save(ANON_FAVS, [...favs]);
    document.dispatchEvent(new CustomEvent('zj:favs'));
    return favs.has(id);
  }

  function getHistory() {
    const u = currentUser();
    return u ? u.history : load(ANON_HISTORY, []);
  }
  function recordPlay(gameId) {
    let hist = getHistory().filter(h => h.id !== gameId);
    const prev = getHistory().find(h => h.id === gameId);
    hist.unshift({ id: gameId, ts: Date.now(), plays: (prev ? prev.plays : 0) + 1 });
    hist = hist.slice(0, 40);
    if (currentPseudo()) updateUser({ history: hist });
    else save(ANON_HISTORY, hist);
  }

  function stats() {
    const u = currentUser();
    const hist = getHistory();
    const comments = load(COMMENTS_KEY, {});
    const myComments = u ? Object.values(comments).flat().filter(c => c.pseudo === u.pseudo).length : 0;
    return {
      jeuxJoues: hist.length,
      parties: hist.reduce((n, h) => n + (h.plays || 1), 0),
      favoris: getFavs().size,
      commentaires: myComments
    };
  }

  /* ---------- Likes (base locale + ton vote) ---------- */
  function seedLikes(gameId) {
    let h = 0; for (const c of gameId) h = (h * 31 + c.charCodeAt(0)) % 100000;
    const up = 40 + (h % 900);
    return { up, down: Math.floor(up * (0.04 + (h % 10) / 100)) };
  }
  function getLikes(gameId) {
    const all = load(LIKES_KEY, {});
    if (!all[gameId]) { all[gameId] = seedLikes(gameId); save(LIKES_KEY, all); }
    const u = currentUser();
    return { ...all[gameId], my: u && u.likes ? (u.likes[gameId] || 0) : 0 };
  }
  function vote(gameId, v) { // v = 1 ou -1
    const u = currentUser();
    if (!u) throw new Error('login');
    const all = load(LIKES_KEY, {});
    if (!all[gameId]) all[gameId] = seedLikes(gameId);
    const likes = { ...(u.likes || {}) };
    const old = likes[gameId] || 0;
    if (old === v) { // re-clic = annuler
      all[gameId][v === 1 ? 'up' : 'down']--; likes[gameId] = 0;
    } else {
      if (old === 1) all[gameId].up--;
      if (old === -1) all[gameId].down--;
      all[gameId][v === 1 ? 'up' : 'down']++; likes[gameId] = v;
    }
    save(LIKES_KEY, all); updateUser({ likes });
    return getLikes(gameId);
  }

  /* ---------- Commentaires (locaux, par jeu) ---------- */
  function getComments(gameId) { return load(COMMENTS_KEY, {})[gameId] || []; }
  function addComment(gameId, text) {
    const u = currentUser();
    if (!u) throw new Error('login');
    text = text.trim();
    if (text.length < 2) throw new Error('Commentaire trop court.');
    if (text.length > 400) throw new Error('400 caractères maximum.');
    const all = load(COMMENTS_KEY, {});
    (all[gameId] = all[gameId] || []).unshift({ pseudo: u.pseudo, avatar: u.avatar, text, ts: Date.now() });
    all[gameId] = all[gameId].slice(0, 100);
    save(COMMENTS_KEY, all);
    return getComments(gameId);
  }
  function deleteComment(gameId, ts) {
    const u = currentUser(); if (!u) return getComments(gameId);
    const all = load(COMMENTS_KEY, {});
    all[gameId] = (all[gameId] || []).filter(c => !(c.ts === ts && c.pseudo === u.pseudo));
    save(COMMENTS_KEY, all);
    return getComments(gameId);
  }

  /* ---------- Interface : bouton compte + fenêtre de connexion ---------- */
  function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }

  function mountChrome() {
    // Modale injectée une seule fois
    if (!document.getElementById('zjModal')) {
      const m = document.createElement('div');
      m.id = 'zjModal'; m.className = 'zj-modal'; m.hidden = true;
      m.innerHTML = `
        <div class="zj-modal-card" role="dialog" aria-modal="true">
          <button class="zj-close" aria-label="Fermer">✕</button>
          <div class="zj-tabs">
            <button data-tab="login" class="on">Connexion</button>
            <button data-tab="register">Créer un compte</button>
          </div>
          <form id="zjFormLogin">
            <label>Pseudo<input name="pseudo" autocomplete="username" required></label>
            <label>Mot de passe<input name="pass" type="password" autocomplete="current-password" required></label>
            <p class="zj-err"></p>
            <button class="zj-submit" type="submit">Se connecter</button>
          </form>
          <form id="zjFormRegister" hidden>
            <label>Choisis un pseudo<input name="pseudo" autocomplete="username" required maxlength="20"></label>
            <label>Mot de passe<input name="pass" type="password" autocomplete="new-password" required></label>
            <label>Ton avatar</label>
            <div class="zj-avatars">${AVATARS.map((a, i) => `<button type="button" data-av="${a}" class="${i === 0 ? 'on' : ''}">${a}</button>`).join('')}</div>
            <p class="zj-err"></p>
            <button class="zj-submit" type="submit">Créer mon compte</button>
          </form>
          <p class="zj-note">Compte local : il est enregistré dans ce navigateur, sur cet appareil uniquement. Pas d’e-mail demandé, rien n’est envoyé sur internet.</p>
        </div>`;
      document.body.appendChild(m);

      let avatarChoice = AVATARS[0];
      m.querySelector('.zj-close').onclick = () => { m.hidden = true; };
      m.addEventListener('click', e => { if (e.target === m) m.hidden = true; });
      document.addEventListener('keydown', e => { if (e.key === 'Escape') m.hidden = true; });
      m.querySelectorAll('.zj-tabs button').forEach(b => b.onclick = () => {
        m.querySelectorAll('.zj-tabs button').forEach(x => x.classList.toggle('on', x === b));
        document.getElementById('zjFormLogin').hidden = b.dataset.tab !== 'login';
        document.getElementById('zjFormRegister').hidden = b.dataset.tab !== 'register';
      });
      m.querySelectorAll('.zj-avatars button').forEach(b => b.onclick = () => {
        avatarChoice = b.dataset.av;
        m.querySelectorAll('.zj-avatars button').forEach(x => x.classList.toggle('on', x === b));
      });
      const showErr = (form, msg) => form.querySelector('.zj-err').textContent = msg;
      const done = () => { m.hidden = true; refreshAuthUI(); document.dispatchEvent(new CustomEvent('zj:auth')); };
      document.getElementById('zjFormLogin').addEventListener('submit', async e => {
        e.preventDefault(); showErr(e.target, '');
        try { await login(e.target.pseudo.value, e.target.pass.value); done(); }
        catch (err) { showErr(e.target, err.message); }
      });
      document.getElementById('zjFormRegister').addEventListener('submit', async e => {
        e.preventDefault(); showErr(e.target, '');
        try { await register(e.target.pseudo.value, e.target.pass.value, avatarChoice); done(); }
        catch (err) { showErr(e.target, err.message); }
      });
    }
    refreshAuthUI();
  }

  function refreshAuthUI() {
    const slot = document.getElementById('authSlot');
    if (!slot) return;
    const u = currentUser();
    const base = document.body.dataset.base || '';
    if (!u) {
      slot.innerHTML = `<button class="auth-btn" id="zjOpenAuth">Se connecter</button>
                        <button class="auth-btn primary" id="zjOpenRegister">S’inscrire</button>`;
      const open = tab => {
        const m = document.getElementById('zjModal'); m.hidden = false;
        m.querySelector(`.zj-tabs button[data-tab="${tab}"]`).click();
      };
      document.getElementById('zjOpenAuth').onclick = () => open('login');
      document.getElementById('zjOpenRegister').onclick = () => open('register');
    } else {
      slot.innerHTML = `
        <div class="user-chip" id="zjChip">
          <span class="avatar">${u.avatar}</span><span class="pseudo">${esc(u.pseudo)}</span><span class="chev">▾</span>
          <div class="user-menu" hidden>
            <a href="${base}profil.html">Mon profil</a>
            <a href="${base}profil.html#favoris">Mes favoris</a>
            <a href="${base}profil.html#historique">Historique</a>
            <button id="zjLogout">Se déconnecter</button>
          </div>
        </div>`;
      const chip = document.getElementById('zjChip'), menu = chip.querySelector('.user-menu');
      chip.addEventListener('click', e => { if (e.target.closest('.user-menu')) return; menu.hidden = !menu.hidden; });
      document.addEventListener('click', e => { if (!chip.contains(e.target)) menu.hidden = true; });
      document.getElementById('zjLogout').onclick = () => { logout(); refreshAuthUI(); document.dispatchEvent(new CustomEvent('zj:auth')); };
    }
  }

  function requireLogin() {
    if (currentUser()) return true;
    const m = document.getElementById('zjModal');
    if (m) { m.hidden = false; m.querySelector('.zj-tabs button[data-tab="login"]').click(); }
    return false;
  }

  window.ZJ = {
    AVATARS, register, login, logout, deleteAccount, currentUser, updateUser,
    getFavs, isFav, toggleFav, getHistory, recordPlay, stats,
    getLikes, vote, getComments, addComment, deleteComment,
    mountChrome, refreshAuthUI, requireLogin, esc
  };
})();
