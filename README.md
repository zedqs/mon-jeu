# 🎮 ZedJeux

Un site de jeux gratuits façon portail, 100 % HTML/CSS/JS — aucun téléchargement, tout se joue dans le navigateur (ordinateur, tablette et téléphone).

## ⭐ Les jeux intégrés (37)

Des jeux de studios connus, intégrés légalement via les flux officiels de partenaires de distribution destinés aux éditeurs de sites (ils sont conçus pour être joués dans une page tierce). Page lecteur : `jouer.html?jeu=<slug>`, catalogue : `assets/catalogue.js`.

🏍️ Moto X3M Spooky Land · 🪖 Tank Stars · 🌍 WorldGuessr · 💎 Cursed Treasure 1.5 · 🎯 Wacky Strike · 🚙 Car Eats Car · 🕳️ Sink Hole · 🏍️ Vex X3M 3 · 🎖️ Battalion Commander · 🌀 Zuma (Zumble Ocean, Zumbo Mania) · 🏎️ Nitro Racing Gear · 💪 Muscle Rush 3D · et bien plus !

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
```

Ouvre simplement `index.html` dans un navigateur, ou sers le dossier avec `python3 -m http.server`.
