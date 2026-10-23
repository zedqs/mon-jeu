/* ============================================================
   ZedJeux — Catalogue des jeux intégrés.

   Règle du catalogue : un jeu n'entre ici que si son éditeur
   autorise l'intégration sur un site tiers SANS inscription
   du domaine. Les anciens jeux GameDistribution ont été
   retirés : leur lecteur affichait « not available here »
   (blocked.html?unregistered=true) sur tout domaine non
   enregistré comme partenaire.

   Sources actuelles :
   - GameMonetize : flux RSS/JSON public pour éditeurs
     (https://gamemonetize.com/rss-builder), jeux servis sur
     html5.gamemonetize.co.
   - WGPlayground : intégration « self-serve » anonyme et
     illimitée, sans compte (wgplayground.com/publishers),
     lecteur servi sur play.wgplayground.com/ifr/<hash>.

   Chaque jeu se joue dans jouer.html?jeu=<slug>.
   ============================================================ */
window.REAL_GAMES = [
  /* ---------------- Course ---------------- */
  {
    slug: 'nitro-racing-gear', name: 'Nitro Racing Gear', cat: 'Course', emoji: '🏎️',
    embed: 'https://html5.gamemonetize.co/dol1mcx04iu3c75ct96uv6vx4o5cwypn/',
    cover: 'https://img.gamemonetize.com/dol1mcx04iu3c75ct96uv6vx4o5cwypn/512x384.jpg',
    grad: 'linear-gradient(135deg,#111827,#374151)', rating: 4, plays: '88 k',
    desc: '40 courses dans 8 décors (ville néon, neige, volcan…) : sprints, drifts et duels de dragster, avec garage pour améliorer tes voitures.',
    controls: 'Flèches ou ZQSD : conduire · MAJ ou N : nitro · ÉCHAP : pause'
  },
  {
    slug: 'stunt-cars-pro', name: 'Stunt Cars Pro', cat: 'Course', emoji: '🚗',
    embed: 'https://play.wgplayground.com/ifr/96078fb4b1eb5f8506e12584a1c46822',
    cover: 'https://static.wgplayground.com/96078fb4b1eb5f8506e12584a1c46822/wgplayground/7eb9c62b906061f42c08787af4f4c1e1.png',
    grad: 'linear-gradient(135deg,#1e3a8a,#0ea5e9)', rating: 4, plays: '320 k',
    desc: 'Conduite 3D en monde ouvert : sportive, voiture de police ou bolide de cascade, explore trois zones, fonce sur les rampes et enchaîne les figures.',
    controls: 'ZQSD ou flèches : conduire · ESPACE : frein à main · MAJ : nitro · C : caméra · R : replacer la voiture'
  },
  {
    slug: 'drift-boss', name: 'Drift Boss', cat: 'Course', emoji: '🏁',
    embed: 'https://play.wgplayground.com/ifr/559c2625fa8c452ce1cbd663f25e17ad',
    cover: 'https://static.wgplayground.com/559c2625fa8c452ce1cbd663f25e17ad/wgplayground/59b0638cb0f8e8408c8916fdd24e3870.png',
    grad: 'linear-gradient(135deg,#7c2d12,#ea580c)', rating: 4, plays: '260 k',
    desc: 'Le drift en un seul bouton : maintiens pour faire glisser la voiture, relâche pour la redresser, et reste sur la piste suspendue le plus longtemps possible.',
    controls: 'ESPACE ou clic maintenu : drifter · Relâcher : aller tout droit'
  },
  {
    slug: 'highway-traffic', name: 'Highway Traffic', cat: 'Course', emoji: '🛣️',
    embed: 'https://play.wgplayground.com/ifr/29efb58310c03d5b76a37c5bfb0be7d7',
    cover: 'https://static.wgplayground.com/29efb58310c03d5b76a37c5bfb0be7d7/wgplayground/05d98d35519f795c38d07596cc3de465.png',
    grad: 'linear-gradient(135deg,#334155,#0f172a)', rating: 4, plays: '210 k',
    desc: 'Sur l’autoroute, double les voitures au plus près sans les toucher. Le trafic ralentit, accélère ou s’arrête sans prévenir : à toi d’anticiper.',
    controls: 'ZQSD ou flèches : conduire · ESPACE : frein à main · MAJ ou F : boost'
  },
  {
    slug: 'magline-moto', name: 'Magline Moto', cat: 'Course', emoji: '🔆',
    embed: 'https://html5.gamemonetize.co/qvkmkrxo0p6g0zyftqz834mvmavrzosk/',
    cover: 'https://img.gamemonetize.com/qvkmkrxo0p6g0zyftqz834mvmavrzosk/512x384.jpg',
    grad: 'linear-gradient(135deg,#4c1d95,#0ea5e9)', rating: 4, plays: '41 k',
    desc: 'Une moto futuriste sur roues d’énergie : 30 niveaux néon, des saltos qui rapportent du temps et un laser frontal pour dégager la route.',
    controls: 'Flèches ou ZQSD : rouler et pencher · ESPACE : laser · MAJ : nitro · R : recommencer'
  },
  {
    slug: 'twinbind', name: 'TwinBind', cat: 'Course', emoji: '🚘', fresh: true,
    embed: 'https://play.wgplayground.com/ifr/c56fcc0fe4b1a86ab4d79115e32ac020',
    cover: 'https://static.wgplayground.com/c56fcc0fe4b1a86ab4d79115e32ac020/wgplayground/68d7685f22cd2060274a90cb0f004d44.png',
    grad: 'linear-gradient(135deg,#065f46,#10b981)', rating: 4, plays: '58 k',
    desc: 'Deux voitures, un seul geste : une pression les déplace toutes les deux sur leurs routes. Glace, nuit, vent ou turbo : survis aux 12 étapes, puis au mode infini.',
    controls: '← → ou Q/D : déplacer les deux voitures · Mobile : toucher la moitié gauche ou droite de l’écran'
  },
  {
    slug: 'speed-evolution', name: 'Speed Evolution', cat: 'Course', emoji: '🦖',
    embed: 'https://html5.gamemonetize.co/x4megppwmr3kkxgodm87rquwayflrbvc/',
    cover: 'https://img.gamemonetize.com/x4megppwmr3kkxgodm87rquwayflrbvc/512x384.jpg',
    grad: 'linear-gradient(135deg,#38bdf8,#818cf8)', rating: 4, plays: '36 k',
    desc: 'Tu démarres en skateboard sur une piste céleste, et ton véhicule évolue au fil des mètres : caddie, monster truck, puis vaisseau spatial.',
    controls: 'Flèches ou ZQSD : conduire · ESPACE : sauter'
  },
  {
    slug: 'midnight-valet', name: 'Midnight Valet', cat: 'Course', emoji: '🅿️',
    embed: 'https://html5.gamemonetize.co/857i4wbmlrdkk761mgidh84z0wuejyw1/',
    cover: 'https://img.gamemonetize.com/857i4wbmlrdkk761mgidh84z0wuejyw1/512x384.jpg',
    grad: 'linear-gradient(135deg,#1e293b,#0f172a)', rating: 4, plays: '29 k',
    desc: 'Tu es voiturier de nuit devant un club : récupère les clés des clients, gare leurs voitures sans les rayer (surtout celle du mafieux) et ramène-les à la sortie.',
    controls: 'ZQSD ou flèches : marcher et conduire · ESPACE : clés, monter, descendre · MAJ : courir ou frein à main'
  },

  /* ---------------- Action ---------------- */
  {
    slug: 'hazmob-io', name: 'Hazmob.io', cat: 'Action', emoji: '🎯',
    embed: 'https://play.wgplayground.com/ifr/b7491702970e3b0b6de397f80a0a1844',
    cover: 'https://static.wgplayground.com/b7491702970e3b0b6de397f80a0a1844/wgplayground/8830d10ce4a3a3920b92c7fc525679e2.png',
    grad: 'linear-gradient(135deg,#3f3f46,#18181b)', rating: 4, plays: '410 k',
    desc: 'FPS multijoueur nerveux : matchs à mort, domination, capture de drapeau et autres modes sur des cartes compactes pensées pour les réflexes.',
    controls: 'ZQSD : se déplacer · Souris : viser · Clic gauche : tirer · Clic droit : viser précisément · R : recharger · MAJ : sprinter'
  },
  {
    slug: 'warfare-1942-online-shooter', name: 'Warfare 1942', cat: 'Action', emoji: '🪖',
    embed: 'https://play.wgplayground.com/ifr/2e8935eb95926955842ef1a1e866e4e4',
    cover: 'https://static.wgplayground.com/2e8935eb95926955842ef1a1e866e4e4/wgplayground/dbd0a8218f5407c1199e9db0aa526256.png',
    grad: 'linear-gradient(135deg,#57534e,#292524)', rating: 5, plays: '360 k',
    desc: 'Batailles en ligne dans un décor de Seconde Guerre mondiale : infanterie, tanks, cartes variées et parties en équipes où chaque point compte.',
    controls: 'ZQSD : se déplacer · Souris : viser · Clic gauche : tirer · Clic droit : viser · R : recharger · ESPACE : sauter'
  },
  {
    slug: 'world-of-wartanks', name: 'World of WarTanks', cat: 'Action', emoji: '🛡️',
    embed: 'https://play.wgplayground.com/ifr/b092185099559da20d8caba1d7455748',
    cover: 'https://static.wgplayground.com/b092185099559da20d8caba1d7455748/wgplayground/23d42dff92c1ec56ae6475ceaec6417c.png',
    grad: 'linear-gradient(135deg,#365314,#1a2e05)', rating: 5, plays: '280 k',
    desc: 'Choisis ton tank et pars en mission : batailles 5 contre 5, mode survie et cibles à verrouiller avant de faire feu.',
    controls: 'ZQSD : conduire le tank · Souris : viser · Clic gauche : tirer · Clic droit : verrouiller la cible · P : pause'
  },
  {
    slug: 'chicken-strike', name: 'Chicken Strike', cat: 'Action', emoji: '🐔',
    embed: 'https://play.wgplayground.com/ifr/f3416440e423b28a44c6463381ac8815',
    cover: 'https://static.wgplayground.com/f3416440e423b28a44c6463381ac8815/wgplayground/635babbe29baad6a366949209cc6e140.png',
    grad: 'linear-gradient(135deg,#f59e0b,#b45309)', rating: 5, plays: '190 k',
    desc: 'Un poulet armé jusqu’au bec dans un jeu de tir à la troisième personne : saute, vise, change d’arme et deviens le champion du poulailler.',
    controls: 'ZQSD : se déplacer · Souris : viser · Clic gauche : tirer · R : recharger · 1/2 : changer d’arme · ESPACE : sauter'
  },
  {
    slug: 'splash-rivals', name: 'Splash Rivals', cat: 'Action', emoji: '🎨', fresh: true,
    embed: 'https://html5.gamemonetize.co/d5r16zw4d91gars6an4gh41h3kvtf2ri/',
    cover: 'https://img.gamemonetize.com/d5r16zw4d91gars6an4gh41h3kvtf2ri/512x384.jpg',
    grad: 'linear-gradient(135deg,#db2777,#7c3aed)', rating: 4, plays: '64 k',
    desc: 'Bataille de peinture en ligne en 4 contre 4 : recouvre l’arène de ta couleur, éclabousse les rivaux et nage dans ta peinture pour te régénérer.',
    controls: 'ZQSD : se déplacer · Souris : viser · Clic gauche : peindre · MAJ : nager dans ta couleur · F : pouvoir spécial'
  },
  {
    slug: 'standstill', name: 'Standstill', cat: 'Action', emoji: '⏱️', fresh: true,
    embed: 'https://play.wgplayground.com/ifr/13e0321218c6430a193c6b3b21a262c5',
    cover: 'https://static.wgplayground.com/13e0321218c6430a193c6b3b21a262c5/wgplayground/69cd02d3eae908b4f3a250632adeab26.png',
    grad: 'linear-gradient(135deg,#111827,#6d28d9)', rating: 4, plays: '95 k',
    desc: 'Un jeu de tir vu du dessus où le temps n’avance que lorsque tu bouges. Un impact suffit, six balles par arme : réfléchis, avance d’un pas, tire.',
    controls: 'ZQSD : se déplacer · Souris : viser · Clic gauche : tirer · ESPACE : dash · Clic droit : lancer l’arme · E : ramasser'
  },
  {
    slug: 'paint-and-escape', name: 'Paint & Escape', cat: 'Action', emoji: '🕶️', fresh: true,
    embed: 'https://html5.gamemonetize.co/8ua263c3gk1nsznafi3inwacj2cj90a7/',
    cover: 'https://img.gamemonetize.com/8ua263c3gk1nsznafi3inwacj2cj90a7/512x384.jpg',
    grad: 'linear-gradient(135deg,#0f766e,#134e4a)', rating: 4, plays: '52 k',
    desc: 'Infiltre les lieux sans te faire repérer, peins ton graffiti sur la zone lumineuse, puis file avant que les gardes ne t’attrapent.',
    controls: 'ZQSD ou flèches : se déplacer · ESPACE ou E : bombe de peinture · T : provoquer · ÉCHAP : pause'
  },

  /* ---------------- Arcade ---------------- */
  {
    slug: 'flow-board-parkour-runner', name: 'Flow Board : Parkour Runner', cat: 'Arcade', emoji: '🏄', fresh: true,
    embed: 'https://play.wgplayground.com/ifr/2e206c2faad30ebd4590525300fbe011',
    cover: 'https://static.wgplayground.com/2e206c2faad30ebd4590525300fbe011/wgplayground/95c3da086668b4c377f81583e1c57181.jpg',
    grad: 'linear-gradient(135deg,#0284c7,#22d3ee)', rating: 4, plays: '120 k',
    desc: 'Runner 3D sur l’eau, dans l’esprit des courses à trois couloirs : change de file, saute, glisse sous les obstacles et enchaîne les figures pour multiplier tes points.',
    controls: '← → : changer de file · ↑ ou ESPACE : sauter · ↓ : s’accroupir · Flèches en l’air : figures'
  },
  {
    slug: 'run-3-space', name: 'Run 3 Space', cat: 'Arcade', emoji: '🚀',
    embed: 'https://play.wgplayground.com/ifr/8d54ce8d0b027ce055039f5217475db3',
    cover: 'https://static.wgplayground.com/8d54ce8d0b027ce055039f5217475db3/wgplayground/bgr_76720f66786541b8986b68db9d4bff85.png',
    grad: 'linear-gradient(135deg,#312e81,#1e1b4b)', rating: 4, plays: '230 k',
    desc: 'Cours dans un tunnel spatial qui se désagrège sous tes pieds : change de paroi, saute les trous et tiens le plus loin possible.',
    controls: '← → ou Q/D : se déplacer · ESPACE ou ↑ : sauter (maintenir pour sauter plus haut)'
  },
  {
    slug: 'sink-hole', name: 'Sinkhole City', cat: 'Arcade', emoji: '🕳️',
    embed: 'https://html5.gamemonetize.co/9q8wg1qah81wrucv2e8knmnxpbqbex4z/',
    cover: 'https://img.gamemonetize.com/9q8wg1qah81wrucv2e8knmnxpbqbex4z/512x384.jpg',
    grad: 'linear-gradient(135deg,#1f2937,#111827)', rating: 4, plays: '73 k',
    desc: 'Tu es un trou affamé en pleine ville : avale voitures, lampadaires puis immeubles pour grandir. Modes chrono, solo ou bataille royale contre d’autres trous.',
    controls: 'Souris ou ZQSD : se déplacer'
  },
  {
    slug: 'muscle-rush-3d', name: 'Muscle Rush 3D', cat: 'Arcade', emoji: '💪',
    embed: 'https://html5.gamemonetize.co/tpj7kvupr0rlgkdtbj8lm9ge6cxxrvno/',
    cover: 'https://img.gamemonetize.com/tpj7kvupr0rlgkdtbj8lm9ge6cxxrvno/512x384.jpg',
    grad: 'linear-gradient(135deg,#f97316,#c2410c)', rating: 4, plays: '58 k',
    desc: 'Un runner où tes choix te rendent plus fort ou plus faible : choisis les bonnes portes, avale les protéines, évite la malbouffe et boxe tes rivaux.',
    controls: 'Glisser la souris ou ← → : se diriger · Clic ou ESPACE : frapper'
  },
  {
    slug: 'cakefoot', name: 'Cakefoot', cat: 'Arcade', emoji: '🍰', fresh: true,
    embed: 'https://play.wgplayground.com/ifr/485a3f9032a911997a50949e7186e05d',
    cover: 'https://static.wgplayground.com/485a3f9032a911997a50949e7186e05d/wgplayground/d78f090631e38def3d777b1ee9cab955.png',
    grad: 'linear-gradient(135deg,#f9a8d4,#db2777)', rating: 4, plays: '88 k',
    desc: 'Un gâteau, un seul bouton, 22 niveaux d’obstacles : maintiens pour avancer, relâche pour reculer, et traverse sans te faire éliminer.',
    controls: 'Maintenir clic, touche ou écran : avancer · Relâcher : reculer'
  },
  {
    slug: 'storm-dash', name: 'Storm Dash', cat: 'Arcade', emoji: '🌩️',
    embed: 'https://html5.gamemonetize.co/lpvw2669qu46qr82kwg363sackyftudv/',
    cover: 'https://img.gamemonetize.com/lpvw2669qu46qr82kwg363sackyftudv/512x384.jpg',
    grad: 'linear-gradient(135deg,#312e81,#1e1b4b)', rating: 4, plays: '44 k',
    desc: 'Cours, saute et dashe pour échapper à la tempête qui te colle aux talons. Ramasse les pièces pour améliorer tes capacités et battre ton record de distance.',
    controls: '← → ou Q/D : courir · ESPACE ou ↑ : sauter · ↓ : dasher'
  },
  {
    slug: 'jelly-mob-rush', name: 'Jelly Mob Rush', cat: 'Arcade', emoji: '🍬',
    embed: 'https://html5.gamemonetize.co/qmp9f6s9yny9jhhcwi9iul8vvyxnax2w/',
    cover: 'https://img.gamemonetize.com/qmp9f6s9yny9jhhcwi9iul8vvyxnax2w/512x384.jpg',
    grad: 'linear-gradient(135deg,#e879f9,#a21caf)', rating: 3, plays: '25 k',
    desc: 'Guide ta foule de bonhommes en gelée : choisis les portes qui la multiplient, esquive les rouleaux de cuisine et écrase l’armée rouge à l’arrivée.',
    controls: 'Glisser la souris ou Q/D : diriger la foule'
  },

  /* ---------------- Réflexion ---------------- */
  {
    slug: 'zumba-mania', name: 'Zumba Mania', cat: 'Réflexion', emoji: '🌀',
    embed: 'https://play.wgplayground.com/ifr/b659708828fea2992102e98e03ad1355',
    cover: 'https://static.wgplayground.com/b659708828fea2992102e98e03ad1355/wgplayground/8a50463b12992142309ee7cb62fb6c1e.png',
    grad: 'linear-gradient(135deg,#b45309,#78350f)', rating: 4, plays: '205 k',
    desc: 'Tire des billes colorées dans la file qui avance pour former des groupes de trois et l’arrêter avant le bout du parcours.',
    controls: 'Souris : viser et tirer · Cliquer la grenouille : échanger la bille'
  },
  {
    slug: 'bus-escape-traffic-jam', name: 'Bus Escape : Traffic Jam', cat: 'Réflexion', emoji: '🚌',
    embed: 'https://play.wgplayground.com/ifr/49eb32f672c0055591434da3fc95cee2',
    cover: 'https://static.wgplayground.com/49eb32f672c0055591434da3fc95cee2/wgplayground/afe5d4e99d1f7a86fc605563ee76e650.png',
    grad: 'linear-gradient(135deg,#d97706,#92400e)', rating: 4, plays: '180 k',
    desc: 'Parking complètement bloqué : fais sortir chaque bus dans le bon ordre pour embarquer les passagers de sa couleur sans créer un nouvel embouteillage.',
    controls: 'Souris : cliquer un véhicule pour le faire avancer dans sa direction'
  },
  {
    slug: 'solitaire-the-collection', name: 'Solitaire The Collection', cat: 'Réflexion', emoji: '🃏', fresh: true,
    embed: 'https://play.wgplayground.com/ifr/6910af95235de2ab59a8e5c5ecab3c55',
    cover: 'https://static.wgplayground.com/6910af95235de2ab59a8e5c5ecab3c55/wgplayground/a6887d101133bd25bcd9ab3bc272117b.png',
    grad: 'linear-gradient(135deg,#166534,#14532d)', rating: 5, plays: '150 k',
    desc: '33 variantes de solitaire en un seul jeu : Klondike, Spider, FreeCell, Pyramid et bien d’autres, avec défis quotidiens et sauvegarde automatique.',
    controls: 'Souris : choisir une variante, puis glisser ou cliquer les cartes'
  },
  {
    slug: 'sandybay', name: 'SandyBay', cat: 'Réflexion', emoji: '🏖️', fresh: true,
    embed: 'https://play.wgplayground.com/ifr/9669a96ff158f2d9152df948a24cd027',
    cover: 'https://static.wgplayground.com/9669a96ff158f2d9152df948a24cd027/wgplayground/a37e0eb9290e1cb00c43d37b08f81af9.jpg',
    grad: 'linear-gradient(135deg,#0891b2,#155e75)', rating: 4, plays: '76 k',
    desc: 'Trie le sable coloré pour compléter l’image en pixels, nourris les animaux que tu découvres et utilise les bonus quand les emplacements se remplissent.',
    controls: 'Souris : envoyer les seaux sur le tapis dans le bon ordre'
  },
  {
    slug: 'adventure-squad', name: 'Adventure Squad', cat: 'Réflexion', emoji: '⚔️', fresh: true,
    embed: 'https://play.wgplayground.com/ifr/853310814bd1a7fadadd10456ca5e964',
    cover: 'https://static.wgplayground.com/853310814bd1a7fadadd10456ca5e964/wgplayground/908d27546c054affa1d056980255a67b.png',
    grad: 'linear-gradient(135deg,#78350f,#451a03)', rating: 4, plays: '84 k',
    desc: 'RPG tactique : recrute des héros, place les défenseurs devant et les mages derrière, puis fais évoluer leurs classes entre les batailles.',
    controls: 'Souris : recruter, placer les héros et lancer leurs capacités'
  }
];
