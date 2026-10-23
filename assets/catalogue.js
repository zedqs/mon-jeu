/* ============================================================
   ZedJeux — Catalogue des jeux intégrés.
   Tous les jeux proviennent de flux officiels destinés aux
   éditeurs de sites : ils sont conçus pour être joués dans
   une page tierce, sans blocage.
   Chaque jeu se joue dans jouer.html?jeu=<slug>
   embed = adresse du jeu (le lecteur ajoute les paramètres
   requis par le distributeur, comme l'URL de la page).
   ============================================================ */
window.REAL_GAMES = [
  /* ---------------- Course ---------------- */
  {
    slug: 'moto-x3m-spooky-land', name: 'Moto X3M Spooky Land', cat: 'Course', emoji: '🏍️',
    embed: 'https://html5.gamedistribution.com/b8a342904608470a9f3382337aca3558/',
    cover: 'https://img.gamedistribution.com/b8a342904608470a9f3382337aca3558-512x384.jpeg',
    grad: 'linear-gradient(135deg,#0ea5e9,#6366f1)', rating: 5, plays: '510 k',
    desc: 'La version Halloween du célèbre jeu de moto : 22 parcours remplis de rampes, de scies et de pièges, à boucler le plus vite possible en enchaînant les saltos.',
    controls: '↑ accélérer · ↓ freiner · ← → pencher la moto en l’air'
  },
  {
    slug: 'vex-x3m-3', name: 'Vex X3M 3', cat: 'Course', emoji: '🏁', fresh: true,
    embed: 'https://html5.gamedistribution.com/ce1b2e5eabe44debb11bf77cd04c0f85/',
    cover: 'https://img.gamedistribution.com/ce1b2e5eabe44debb11bf77cd04c0f85-512x384.jpg',
    grad: 'linear-gradient(135deg,#334155,#0f172a)', rating: 4, plays: '180 k',
    desc: 'Le stickman de Vex enfourche une moto : parcours d’obstacles au cordeau, checkpoints serrés et chronomètre qui ne pardonne pas.',
    controls: 'Flèches ou ZQSD : conduire et gérer l’équilibre'
  },
  {
    slug: 'moto-traffic-rider', name: 'Moto Traffic Rider', cat: 'Course', emoji: '🛣️', fresh: true,
    embed: 'https://html5.gamedistribution.com/9bde41f232834eff9ea81554ecee8279/',
    cover: 'https://img.gamedistribution.com/9bde41f232834eff9ea81554ecee8279-512x384.jpg',
    grad: 'linear-gradient(135deg,#f59e0b,#dc2626)', rating: 4, plays: '145 k',
    desc: 'À moto dans le trafic, en vue subjective : double les voitures au plus près pour engranger les points, sans toucher.',
    controls: '← → slalomer · ↑ accélérer · ↓ freiner'
  },
  {
    slug: 'two-rx7-drifters', name: 'Two RX7 Drifters', cat: 'Course', emoji: '🚗', fresh: true,
    embed: 'https://html5.gamedistribution.com/f85eee6b515c4aecb0ef6c6563d05e39/',
    cover: 'https://img.gamedistribution.com/f85eee6b515c4aecb0ef6c6563d05e39-512x384.jpg',
    grad: 'linear-gradient(135deg,#7c2d12,#431407)', rating: 4, plays: '96 k',
    desc: 'Du drift en 3D au volant d’une RX7 : enchaîne les virages en glisse pour faire grimper le compteur de points. Jouable aussi à deux.',
    controls: 'ZQSD / flèches : conduire · ESPACE : frein à main pour drifter'
  },
  {
    slug: 'car-eats-car-underwater', name: 'Car Eats Car : Underwater', cat: 'Course', emoji: '🚙',
    embed: 'https://html5.gamedistribution.com/16de13074932401f9f65f4023e586ab4/',
    cover: 'https://img.gamedistribution.com/16de13074932401f9f65f4023e586ab4-512x384.jpeg',
    grad: 'linear-gradient(135deg,#0369a1,#164e63)', rating: 4, plays: '230 k',
    desc: 'Des voitures carnivores sous l’océan : écrase tes poursuivants, collecte les rubis et améliore ton bolide entre chaque niveau.',
    controls: 'Flèches : conduire et équilibrer · X : turbo'
  },
  {
    slug: 'car-eats-car-volcanic', name: 'Car Eats Car : Volcanic', cat: 'Course', emoji: '🌋',
    embed: 'https://html5.gamedistribution.com/2889b8c611d84c00a3e077ee5bd21bf0/',
    cover: 'https://img.gamedistribution.com/2889b8c611d84c00a3e077ee5bd21bf0-512x384.jpeg',
    grad: 'linear-gradient(135deg,#b91c1c,#7f1d1d)', rating: 4, plays: '205 k',
    desc: 'Même recette, décor volcanique : échappe aux voitures-mangeuses lancées à tes trousses sur des pistes accidentées.',
    controls: 'Flèches : conduire et équilibrer · X : turbo'
  },
  {
    slug: 'nitro-racing-gear', name: 'Nitro Racing Gear', cat: 'Course', emoji: '🏎️', fresh: true,
    embed: 'https://html5.gamemonetize.co/dol1mcx04iu3c75ct96uv6vx4o5cwypn/',
    cover: 'https://img.gamemonetize.com/dol1mcx04iu3c75ct96uv6vx4o5cwypn/512x384.jpg',
    grad: 'linear-gradient(135deg,#111827,#374151)', rating: 4, plays: '88 k',
    desc: '40 courses dans 8 décors (ville néon, neige, volcan…) : sprints, drifts et duels de dragster, avec garage pour améliorer tes voitures.',
    controls: 'Flèches : conduire · MAJ / N : nitro · ÉCHAP : pause'
  },
  {
    slug: 'magline-moto', name: 'Magline Moto', cat: 'Course', emoji: '🔆', fresh: true,
    embed: 'https://html5.gamemonetize.co/qvkmkrxo0p6g0zyftqz834mvmavrzosk/',
    cover: 'https://img.gamemonetize.com/qvkmkrxo0p6g0zyftqz834mvmavrzosk/512x384.jpg',
    grad: 'linear-gradient(135deg,#4c1d95,#0ea5e9)', rating: 4, plays: '41 k',
    desc: 'Une moto futuriste sur roues d’énergie : 30 niveaux néon, des saltos qui rapportent du temps et un laser frontal pour dégager la route.',
    controls: 'Flèches / ZQSD : rouler et pencher · ESPACE : laser · MAJ : nitro'
  },
  {
    slug: 'speed-evolution', name: 'Speed Evolution', cat: 'Course', emoji: '🦖', fresh: true,
    embed: 'https://html5.gamemonetize.co/x4megppwmr3kkxgodm87rquwayflrbvc/',
    cover: 'https://img.gamemonetize.com/x4megppwmr3kkxgodm87rquwayflrbvc/512x384.jpg',
    grad: 'linear-gradient(135deg,#38bdf8,#818cf8)', rating: 4, plays: '36 k',
    desc: 'Tu démarres en skateboard sur une piste céleste, et ton véhicule évolue au fil des mètres : caddie, monster truck, puis vaisseau spatial.',
    controls: 'Flèches / ZQSD : conduire · ESPACE : sauter'
  },
  {
    slug: 'midnight-valet', name: 'Midnight Valet', cat: 'Course', emoji: '🅿️', fresh: true,
    embed: 'https://html5.gamemonetize.co/857i4wbmlrdkk761mgidh84z0wuejyw1/',
    cover: 'https://img.gamemonetize.com/857i4wbmlrdkk761mgidh84z0wuejyw1/512x384.jpg',
    grad: 'linear-gradient(135deg,#1e293b,#0f172a)', rating: 4, plays: '29 k',
    desc: 'Tu es voiturier de nuit devant un club : récupère les clés des clients, gare leurs voitures sans les rayer (surtout celle du mafieux) et ramène-les à la sortie.',
    controls: 'ZQSD / flèches : marcher et conduire · ESPACE : clés / monter / descendre · MAJ : courir ou frein à main'
  },
  {
    slug: 'crazy-bike-stunts-pvp', name: 'Crazy Bike Stunts PvP', cat: 'Course', emoji: '🚴', fresh: true,
    embed: 'https://html5.gamedistribution.com/0c89181b9cfe4897afa41b0f94385da9/',
    cover: 'https://img.gamedistribution.com/0c89181b9cfe4897afa41b0f94385da9-512x384.jpg',
    grad: 'linear-gradient(135deg,#ea580c,#9a3412)', rating: 3, plays: '57 k',
    desc: 'Des cascades à vélo sur des rampes géantes, en solo ou contre un second joueur sur le même écran.',
    controls: 'Flèches : pédaler et équilibrer (joueur 2 : ZQSD)'
  },

  /* ---------------- Action ---------------- */
  {
    slug: 'tank-stars', name: 'Tank Stars', cat: 'Action', emoji: '🪖',
    embed: 'https://html5.gamedistribution.com/659090e00bfc4650899550d63f8a130d/',
    cover: 'https://img.gamedistribution.com/659090e00bfc4650899550d63f8a130d-512x384.jpg',
    grad: 'linear-gradient(135deg,#365314,#1a2e05)', rating: 5, plays: '420 k',
    desc: 'Le duel de tanks phénomène : règle l’angle et la puissance, tiens compte du terrain, et pulvérise le char adverse. À deux sur le même écran, c’est encore meilleur.',
    controls: 'Souris : viser · Maintenir pour charger la puissance, relâcher pour tirer'
  },
  {
    slug: 'wacky-strike', name: 'Wacky Strike', cat: 'Action', emoji: '🎯',
    embed: 'https://html5.gamedistribution.com/6c30cfc235744ec89ffd1d6658e07b22/',
    cover: 'https://img.gamedistribution.com/6c30cfc235744ec89ffd1d6658e07b22-512x384.jpeg',
    grad: 'linear-gradient(135deg,#0f766e,#134e4a)', rating: 4, plays: '260 k',
    desc: 'Un jeu de tir en ligne au style cartoon : des cartes variées, des armes déjantées et des parties rapides contre de vrais joueurs.',
    controls: 'ZQSD : bouger · Souris : viser · Clic : tirer · R : recharger'
  },
  {
    slug: 'battalion-commander-2', name: 'Battalion Commander 2', cat: 'Action', emoji: '🎖️',
    embed: 'https://html5.gamedistribution.com/75ab86d2ec924182a511b342a09011ac/',
    cover: 'https://img.gamedistribution.com/75ab86d2ec924182a511b342a09011ac-512x384.jpeg',
    grad: 'linear-gradient(135deg,#3f3f46,#18181b)', rating: 4, plays: '310 k',
    desc: 'Mène ton escouade vers le haut de l’écran dans ce jeu de tir vertical : libère des soldats pour grossir ton bataillon et débloque des armes toujours plus lourdes.',
    controls: 'Souris : diriger l’escouade · Le tir est automatique'
  },
  {
    slug: 'battalion-commander-1917', name: 'Battalion Commander 1917', cat: 'Action', emoji: '⚔️',
    embed: 'https://html5.gamedistribution.com/71cbc5e6851846f9b9b4319a070a61ae/',
    cover: 'https://img.gamedistribution.com/71cbc5e6851846f9b9b4319a070a61ae-512x384.jpeg',
    grad: 'linear-gradient(135deg,#57534e,#292524)', rating: 4, plays: '190 k',
    desc: 'La même formule pendant la Première Guerre mondiale : avance de tranchée en tranchée avec ton escouade et tiens bon face aux vagues ennemies.',
    controls: 'Souris : diriger l’escouade · Le tir est automatique'
  },
  {
    slug: 'stickman-warriors', name: 'Stickman Warriors Fight', cat: 'Action', emoji: '🥷',
    embed: 'https://html5.gamedistribution.com/6f55b32ecd294adb8fc7bd117e091d07/',
    cover: 'https://img.gamedistribution.com/6f55b32ecd294adb8fc7bd117e091d07-512x384.jpg',
    grad: 'linear-gradient(135deg,#111827,#6d28d9)', rating: 4, plays: '340 k',
    desc: 'Des combats de stickmans aux pouvoirs de super-héros : enchaîne les adversaires dans des arènes spectaculaires à coups d’attaques spéciales.',
    controls: 'Touches affichées dans le jeu : déplacer, sauter, attaquer, pouvoir spécial'
  },
  {
    slug: 'kingdom-wars', name: 'Kingdom Wars', cat: 'Action', emoji: '🏰',
    embed: 'https://html5.gamedistribution.com/bdcc1af7f5cb4044a969d54826fe0a4d/',
    cover: 'https://img.gamedistribution.com/bdcc1af7f5cb4044a969d54826fe0a4d-512x384.jpg',
    grad: 'linear-gradient(135deg,#78350f,#451a03)', rating: 4, plays: '120 k',
    desc: 'Stratégie médiévale en temps réel : produis des troupes, gère tes ressources et renverse le château d’en face avant qu’il ne renverse le tien.',
    controls: 'Souris : recruter et lancer les unités'
  },
  {
    slug: 'dogs-vs-aliens', name: 'Dogs vs Aliens', cat: 'Action', emoji: '🐶',
    embed: 'https://html5.gamedistribution.com/966d94f902de491eb224711f51d7a92e/',
    cover: 'https://img.gamedistribution.com/966d94f902de491eb224711f51d7a92e-512x384.jpg',
    grad: 'linear-gradient(135deg,#16a34a,#14532d)', rating: 4, plays: '67 k',
    desc: 'Les extraterrestres envahissent la Terre et seuls les chiens peuvent la sauver. Un tower defense décalé où tu déploies ta meute par vagues.',
    controls: 'Souris : placer et améliorer les défenseurs'
  },

  /* ---------------- Arcade ---------------- */
  {
    slug: 'sink-hole', name: 'Sink Hole', cat: 'Arcade', emoji: '🕳️', fresh: true,
    embed: 'https://html5.gamemonetize.co/9q8wg1qah81wrucv2e8knmnxpbqbex4z/',
    cover: 'https://img.gamemonetize.com/9q8wg1qah81wrucv2e8knmnxpbqbex4z/512x384.jpg',
    grad: 'linear-gradient(135deg,#1f2937,#111827)', rating: 4, plays: '73 k',
    desc: 'Tu es un trou noir affamé en pleine ville : avale voitures, lampadaires puis immeubles entiers pour grandir, en évitant les trous plus gros que toi.',
    controls: 'Souris ou flèches : se déplacer · ÉCHAP : pause'
  },
  {
    slug: 'muscle-rush-3d', name: 'Muscle Rush 3D', cat: 'Arcade', emoji: '💪', fresh: true,
    embed: 'https://html5.gamemonetize.co/tpj7kvupr0rlgkdtbj8lm9ge6cxxrvno/',
    cover: 'https://img.gamemonetize.com/tpj7kvupr0rlgkdtbj8lm9ge6cxxrvno/512x384.jpg',
    grad: 'linear-gradient(135deg,#f97316,#c2410c)', rating: 4, plays: '58 k',
    desc: 'Un runner où tes choix te rendent plus fort ou plus faible : choisis les bonnes portes, avale les protéines, évite la malbouffe et boxe tes rivaux.',
    controls: 'Glisser la souris ou ← → : se diriger · Clic / ESPACE : frapper'
  },
  {
    slug: 'storm-dash', name: 'Storm Dash', cat: 'Arcade', emoji: '🌩️', fresh: true,
    embed: 'https://html5.gamemonetize.co/lpvw2669qu46qr82kwg363sackyftudv/',
    cover: 'https://img.gamemonetize.com/lpvw2669qu46qr82kwg363sackyftudv/512x384.jpg',
    grad: 'linear-gradient(135deg,#312e81,#1e1b4b)', rating: 4, plays: '44 k',
    desc: 'Cours, saute et dashe pour échapper à la tempête qui te colle aux talons. Ramasse les pièces pour améliorer tes capacités et battre ton record de distance.',
    controls: '← → ou Q/D : courir · ↑ : sauter · ↓ : dasher'
  },
  {
    slug: 'cake-stack', name: 'Cake Stack', cat: 'Arcade', emoji: '🍰', fresh: true,
    embed: 'https://html5.gamemonetize.co/as1m0vqqgd469nkymknac70ki6k8icgq/',
    cover: 'https://img.gamemonetize.com/as1m0vqqgd469nkymknac70ki6k8icgq/512x384.jpg',
    grad: 'linear-gradient(135deg,#f9a8d4,#db2777)', rating: 3, plays: '37 k',
    desc: 'Cours en empilant les parts de gâteau sur ton passage : plus ta tour est haute à l’arrivée, plus tu marques de points. Simple et très prenant.',
    controls: 'Souris : glisser à gauche / droite'
  },
  {
    slug: 'jelly-mob-rush', name: 'Jelly Mob Rush', cat: 'Arcade', emoji: '🍬', fresh: true,
    embed: 'https://html5.gamemonetize.co/qmp9f6s9yny9jhhcwi9iul8vvyxnax2w/',
    cover: 'https://img.gamemonetize.com/qmp9f6s9yny9jhhcwi9iul8vvyxnax2w/512x384.jpg',
    grad: 'linear-gradient(135deg,#e879f9,#a21caf)', rating: 3, plays: '25 k',
    desc: 'Guide ta foule de bonhommes en gelée : choisis les portes qui la multiplient, esquive les rouleaux de cuisine et écrase l’armée rouge à l’arrivée.',
    controls: 'Glisser la souris ou Q/D : diriger la foule'
  },
  {
    slug: 'zumble-ocean', name: 'Zumble Ocean', cat: 'Arcade', emoji: '🐠',
    embed: 'https://html5.gamedistribution.com/daff15f24e0b4ffd8fdd1f1da106e570/',
    cover: 'https://img.gamedistribution.com/daff15f24e0b4ffd8fdd1f1da106e570-512x384.jpeg',
    grad: 'linear-gradient(135deg,#0e7490,#155e75)', rating: 4, plays: '150 k',
    desc: 'Le principe de Zuma sous l’eau : tire des billes colorées dans la file qui avance pour former des groupes de trois avant qu’elle n’atteigne le bout.',
    controls: 'Souris : viser · Clic : tirer la bille'
  },
  {
    slug: 'zumbo-mania', name: 'Zumbo Mania', cat: 'Arcade', emoji: '🌀',
    embed: 'https://html5.gamedistribution.com/1d9078d79d6c410d879f456d658d63fa/',
    cover: 'https://img.gamedistribution.com/1d9078d79d6c410d879f456d658d63fa-512x384.jpeg',
    grad: 'linear-gradient(135deg,#b45309,#78350f)', rating: 4, plays: '135 k',
    desc: 'Même famille que Zuma et Luxor : une grenouille de pierre, une spirale de billes, et des combos à déclencher en visant juste.',
    controls: 'Souris : viser · Clic : tirer · ESPACE : échanger la bille'
  },

  /* ---------------- Réflexion ---------------- */
  {
    slug: 'cursed-treasure', name: 'Cursed Treasure 1.5', cat: 'Réflexion', emoji: '💎',
    embed: 'https://html5.gamedistribution.com/5d0c9c0ceeb54f4d9c238e82d35dea96/',
    cover: 'https://img.gamedistribution.com/5d0c9c0ceeb54f4d9c238e82d35dea96-512x384.jpg',
    grad: 'linear-gradient(135deg,#581c87,#3b0764)', rating: 5, plays: '380 k',
    desc: 'Un tower defense où tu joues les méchants : dresse tes tours pour empêcher les héros de repartir avec tes gemmes. Un classique du genre, très complet.',
    controls: 'Souris : construire, améliorer et lancer des sorts'
  },
  {
    slug: 'ultimate-tower-defense', name: 'Ultimate Tower Defense', cat: 'Réflexion', emoji: '🗼',
    embed: 'https://html5.gamedistribution.com/508663e69fe74b97a9192c779c3ff71f/',
    cover: 'https://img.gamedistribution.com/508663e69fe74b97a9192c779c3ff71f-512x384.jpg',
    grad: 'linear-gradient(135deg,#14532d,#052e16)', rating: 4, plays: '175 k',
    desc: 'Des vagues d’ennemis, un chemin à défendre et tout un arsenal de tourelles à combiner. Les dernières vagues demandent une vraie stratégie.',
    controls: 'Souris : placer et améliorer les tourelles'
  },
  {
    slug: 'worldguessr', name: 'WorldGuessr', cat: 'Réflexion', emoji: '🌍',
    embed: 'https://html5.gamedistribution.com/fef00656129743768437b7589b7c48b1/',
    cover: 'https://img.gamedistribution.com/fef00656129743768437b7589b7c48b1-512x384.jpg',
    grad: 'linear-gradient(135deg,#0284c7,#0c4a6e)', rating: 5, plays: '290 k',
    desc: 'On te lâche quelque part sur la planète en vue rue : à toi de deviner où en observant les panneaux, les plaques et la végétation. Plus tu es précis, plus tu marques.',
    controls: 'Souris : regarder autour, zoomer, puis placer ton épingle sur la carte'
  },
  {
    slug: 'number-match', name: 'Number Match', cat: 'Réflexion', emoji: '🔢',
    embed: 'https://html5.gamedistribution.com/dab0bbeebecf4025bbd0da9425ec2b65/',
    cover: 'https://img.gamedistribution.com/dab0bbeebecf4025bbd0da9425ec2b65-512x384.jpeg',
    grad: 'linear-gradient(135deg,#0d9488,#134e4a)', rating: 4, plays: '210 k',
    desc: 'Associe les chiffres identiques ou qui totalisent 10 pour vider la grille. Calme en apparence, redoutable quand il ne reste que quelques cases.',
    controls: 'Souris : sélectionner deux chiffres à associer'
  },
  {
    slug: 'mahjong-seasons-2', name: 'Mahjong Seasons 2', cat: 'Réflexion', emoji: '🀄',
    embed: 'https://html5.gamedistribution.com/9136c087a5ff4823a1bebcfeab8460b9/',
    cover: 'https://img.gamedistribution.com/9136c087a5ff4823a1bebcfeab8460b9-512x384.jpg',
    grad: 'linear-gradient(135deg,#166534,#14532d)', rating: 4, plays: '165 k',
    desc: 'Le mahjong solitaire aux couleurs de l’automne et de l’hiver : libère les tuiles par paires identiques jusqu’à vider la pyramide.',
    controls: 'Souris : cliquer deux tuiles libres identiques'
  },
  {
    slug: 'merge-lagoon', name: 'Merge Lagoon', cat: 'Réflexion', emoji: '🏝️',
    embed: 'https://html5.gamedistribution.com/7e7b6107748646f2b18f69bf535663b6/',
    cover: 'https://img.gamedistribution.com/7e7b6107748646f2b18f69bf535663b6-512x384.jpg',
    grad: 'linear-gradient(135deg,#0891b2,#155e75)', rating: 4, plays: '118 k',
    desc: 'Fusionne les objets échoués sur ton île pour en créer de nouveaux, remplir les commandes et débloquer des zones. Le jeu « encore une partie » par excellence.',
    controls: 'Souris : glisser-déposer les objets identiques pour les fusionner'
  },
  {
    slug: 'wake-up-the-box', name: 'Wake Up the Box', cat: 'Réflexion', emoji: '📦',
    embed: 'https://html5.gamedistribution.com/88d7078602364cfd845f7c2796c456c7/',
    cover: 'https://img.gamedistribution.com/88d7078602364cfd845f7c2796c456c7-512x384.jpeg',
    grad: 'linear-gradient(135deg,#a16207,#713f12)', rating: 4, plays: '240 k',
    desc: 'Monsieur Boîte dort profondément : dessine des formes en bois et laisse la physique faire le reste pour le réveiller. Un classique des jeux de physique.',
    controls: 'Souris : dessiner des formes en maintenant le clic'
  },
  {
    slug: '2048-merge-world', name: '2048 Merge World', cat: 'Réflexion', emoji: '🌍', fresh: true,
    embed: 'https://html5.gamedistribution.com/a8ecea31288d4f6581ae36db798ce9ac/',
    cover: 'https://img.gamedistribution.com/a8ecea31288d4f6581ae36db798ce9ac-512x384.jpg',
    grad: 'linear-gradient(135deg,#d97706,#92400e)', rating: 4, plays: '92 k',
    desc: 'Le principe du 2048 en version « fusion de planètes » : lâche les sphères au bon endroit pour les faire évoluer sans déborder.',
    controls: 'Souris : déplacer et lâcher les sphères'
  },
  {
    slug: 'ocean-bubble-sort', name: 'Ocean Bubble Sort', cat: 'Réflexion', emoji: '🧪', fresh: true,
    embed: 'https://html5.gamedistribution.com/7da7b762ca9e4ac1a7fa139feae0568d/',
    cover: 'https://img.gamedistribution.com/7da7b762ca9e4ac1a7fa139feae0568d-512x384.jpg',
    grad: 'linear-gradient(135deg,#2563eb,#1e40af)', rating: 3, plays: '64 k',
    desc: 'Trie les liquides colorés d’éprouvette en éprouvette jusqu’à ce que chaque tube soit unicolore. On se bloque plus vite qu’on ne croit.',
    controls: 'Souris : choisir le tube de départ puis celui d’arrivée'
  },
  {
    slug: 'arrow-tap-puzzle', name: 'Arrow Tap Puzzle', cat: 'Réflexion', emoji: '➡️', fresh: true,
    embed: 'https://html5.gamedistribution.com/0b2abc29bd9c400cb7a7dce4a8a79d44/',
    cover: 'https://img.gamedistribution.com/0b2abc29bd9c400cb7a7dce4a8a79d44-512x384.jpg',
    grad: 'linear-gradient(135deg,#475569,#1e293b)', rating: 3, plays: '48 k',
    desc: 'Chaque flèche ne peut sortir que dans sa direction : trouve le bon ordre pour vider la grille sans tout bloquer.',
    controls: 'Souris : cliquer les flèches dans le bon ordre'
  },
  {
    slug: 'sophies-farm', name: 'Sophie’s Farm', cat: 'Réflexion', emoji: '🚜', fresh: true,
    embed: 'https://html5.gamedistribution.com/df725a3a7e6143529417611af41098cb/',
    cover: 'https://img.gamedistribution.com/df725a3a7e6143529417611af41098cb-512x384.jpg',
    grad: 'linear-gradient(135deg,#65a30d,#3f6212)', rating: 4, plays: '77 k',
    desc: 'Reprends la ferme de Sophie : plante, récolte, nourris les animaux et développe tes bâtiments saison après saison.',
    controls: 'Souris : tout se gère au clic'
  },
  {
    slug: 'gas-station-tycoon', name: 'Gas Station : Junkyard Tycoon', cat: 'Réflexion', emoji: '⛽', fresh: true,
    embed: 'https://html5.gamedistribution.com/53f75279264b4a6484601a99be7aef87/',
    cover: 'https://img.gamedistribution.com/53f75279264b4a6484601a99be7aef87-512x384.jpg',
    grad: 'linear-gradient(135deg,#57534e,#292524)', rating: 4, plays: '83 k',
    desc: 'Transforme une casse et sa vieille station-service en affaire rentable : répare, revends et réinvestis dans de nouvelles pompes.',
    controls: 'Souris : cliquer pour gérer et améliorer'
  }
];
