# 🎮 ZedJeux

Un site de jeux gratuits façon [Poki](https://poki.com), 100 % HTML/CSS/JS — aucun téléchargement, tout se joue dans le navigateur (ordinateur, tablette et téléphone).

## ⭐ Les vrais jeux (intégrés via CrazyGames)

30 jeux populaires jouables directement sur le site via le programme d'intégration officiel de [CrazyGames](https://www.crazygames.com) (page lecteur : `jouer.html?jeu=<slug>`, catalogue : `assets/catalogue.js`) :

🚇 Bus & Subway Runner (style Subway Surfers) · 🏍️ Moto X3M + Pool Party · 🏎️ Smash Karts · 🚗 PolyTrack · 🎤 Friday Night Funkin' · 🛷 Snow Rider 3D · 🔫 SkillWarz · 🧱 BloxdHop.io · 🎱 8 Ball Pool · 🃏 Uno Online · 🏀 Basketball Superstars · 🐍 Snake Clash.io · 🏹 Ragdoll Archers · 🎲 Ludo King · 🀄 Mahjong Solitaire · et bien plus !

> ℹ️ Subway Surfers officiel est une exclusivité Poki : il ne peut pas être intégré légalement. *Bus & Subway Runner* est le même type de jeu (runner sur rails de métro), intégrable librement.

## 🏠 Les mini-jeux faits maison (15)

| Jeu | Catégorie |
|---|---|
| 🌌 Cosmic Summoner — invoque et collectionne des monstres | Cartes |
| 🐍 Snake | Classiques |
| 🔢 2048 | Réflexion |
| 🐤 Flappy Oiseau | Arcade |
| 🟦 Tetris | Classiques |
| 💣 Démineur (3 difficultés) | Réflexion |
| 🃏 Memory (3 niveaux) | Réflexion |
| 🧱 Casse-Briques (niveaux progressifs) | Arcade |
| 🦖 Dino Run | Arcade |
| ⭕ Morpion (IA facile / imbattable / 2 joueurs) | Plateau |
| 🔴 Puissance 4 (IA / 2 joueurs) | Plateau |
| 🎵 Simon (avec sons) | Réflexion |
| 🎯 Vise les Cibles (30 secondes chrono) | Action |
| 🏓 Pong | Classiques |
| 🍎 Attrape-Fruits | Arcade |

## ✨ Fonctionnalités

- Page d'accueil style portail : recherche, catégories, jeu à la une, bouton « jeu au hasard »
- ❤️ Favoris sauvegardés dans le navigateur
- 🏆 Records (meilleurs scores) sauvegardés pour chaque jeu
- 📱 Contrôles tactiles sur mobile

## 📁 Structure

```
index.html            → page d'accueil (portail)
jouer.html            → lecteur des vrais jeux (?jeu=<slug>) avec plein écran
assets/catalogue.js   → catalogue des vrais jeux (CrazyGames)
games/                → un fichier HTML par mini-jeu fait maison
assets/game.css       → style commun des pages de jeux
images/               → illustrations des monstres de Cosmic Summoner
```

Ouvre simplement `index.html` dans un navigateur, ou sers le dossier avec `python3 -m http.server`.
