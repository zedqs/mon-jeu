# 🎮 ZedJeux

Un site de jeux gratuits façon portail, 100 % HTML/CSS/JS — aucun téléchargement, tout se joue dans le navigateur (ordinateur, tablette et téléphone).

## ⭐ Les jeux intégrés (27)

Des jeux de studios indépendants, intégrés légalement via des programmes d'intégration qui **n'exigent pas l'inscription du domaine** : le flux public pour éditeurs de GameMonetize et l'intégration « self-serve » anonyme de WGPlayground. Page lecteur : `jouer.html?jeu=<slug>`, catalogue : `assets/catalogue.js`.

🏎️ Nitro Racing Gear · 🚗 Stunt Cars Pro · 🏁 Drift Boss · 🛣️ Highway Traffic · 🎯 Hazmob.io · 🪖 Warfare 1942 · 🛡️ World of WarTanks · 🐔 Chicken Strike · 🏄 Flow Board : Parkour Runner · 🕳️ Sinkhole City · 🚀 Run 3 Space · 💪 Muscle Rush 3D · 🌀 Zumba Mania · 🚌 Bus Escape · 🃏 Solitaire The Collection · et bien plus !

Le lecteur (`jouer.html`) affiche chaque jeu dans une iframe **sandboxée sans `allow-top-navigation` ni `allow-popups`** : un jeu — ou ses publicités — ne peut ni rediriger la page ZedJeux ni ouvrir un nouvel onglet. Certains jeux partenaires affichent d'abord un bouton « Play game » (courte pub possible) dans le cadre : c'est normal, tout se joue sur place.

> ⚠️ Les anciens jeux GameDistribution ont été retirés : leur lecteur affiche « not available here » (`blocked.html?unregistered=true`) sur tout domaine qui n'est pas enregistré comme partenaire chez eux. Pour les réintégrer un jour, il faudrait créer un compte publisher GameDistribution, y déclarer le domaine du site et attendre sa validation.

> ℹ️ Subway Surfers officiel est une exclusivité Poki (contrat SYBO) : il ne peut pas être intégré légalement, vérifié chez les distributeurs qui autorisent l'intégration. Voir la FAQ dans `infos.html`.

## 🏠 Les mini-jeux faits maison (15)

Codés à la main pour ce site, un fichier par jeu dans `games/` : Cosmic Summoner (collection de monstres), Snake, 2048, Tetris, Flappy, Démineur, Memory, Casse-Briques, Dino Run, Morpion, Puissance 4, Simon, Vise les Cibles, Pong, Attrape-Fruits. Records sauvegardés dans le navigateur, contrôles tactiles.

## 👤 Comptes

Inscription / connexion avec pseudo, mot de passe chiffré (SHA-256) et avatar. Les comptes sont **100 % locaux** (localStorage, aucun serveur) : ils ne fonctionnent que sur l'appareil / le navigateur où ils ont été créés. Ils donnent accès aux favoris personnels, à l'historique, aux votes 👍/👎 et aux commentaires. Voir `infos.html#compte`.

## 📁 Structure

```
index.html            → accueil (populaires, nouveautés, grille filtrable, recherche)
jouer.html            → lecteur des jeux intégrés : plein écran, votes, commentaires, similaires
profil.html           → profil du compte : stats, favoris, historique, avatar
infos.html            → à propos, FAQ, confidentialité, conditions, contact
assets/catalogue.js   → catalogue des jeux intégrés
assets/compte.js      → comptes locaux, favoris, historique, votes, commentaires
assets/main.css       → style principal du site
assets/game.css       → style des pages des mini-jeux faits maison
games/                → un fichier HTML par mini-jeu fait maison
images/               → illustrations des monstres de Cosmic Summoner
ads.txt               → vendeurs publicitaires autorisés (AdSense + partenaire jeux)
```

Ouvre simplement `index.html` dans un navigateur, ou sers le dossier avec `python3 -m http.server`.
