# RAFT - Modern Banking Platform Template

![RAFT Logo](./assets/images/logo.svg)

## 📋 Description

RAFT est un template moderne pour une plateforme bancaire et financière, développé avec HTML, TailwindCSS, et JavaScript. Le projet met l'accent sur une interface utilisateur élégante et responsive, offrant une expérience utilisateur optimale pour les services financiers numériques.

## ✨ Caractéristiques

- Design moderne et minimaliste
- Entièrement responsive
- Animations fluides avec Locomotive Scroll
- Carrousel de témoignages interactif
- Sections "Bento grid" personnalisées
- FAQ interactive avec accordéon
- Support multilingue
- Optimisé pour les performances

## 🛠️ Technologies Utilisées

- HTML5
- TailwindCSS
- JavaScript
- Locomotive Scroll
- Police de caractère SF Pro Display
- Système de grille personnalisé

## 📦 Structure du Projet

```
RAFT/
├── assets/
│   ├── css/
│   │   └── input.css          # Styles TailwindCSS personnalisés
│   ├── fonts/                 # Polices SF Pro Display
│   ├── images/               
│   │   ├── bento/            # Images pour la section bento
│   │   └── logo/             # Logos des partenaires
│   └── js/
│       └── index.js          # Scripts personnalisés
├── dist/
│   └── output.css            # CSS compilé par TailwindCSS
├── index.html                # Page principale
├── package.json
└── tailwind.config.js        # Configuration TailwindCSS
```

## 🚀 Installation

1. Clonez le repository :
```bash
git clone https://github.com/MakVieSAinte/raft-template.git
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez la compilation tailwind :
```bash
npm run watch
```

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont configurées dans `tailwind.config.js` :
```javascript
colors: {
  primary: "#2B892E",
  secondary: "#3D3D3D",
  "secondary-two": "#BDBDBD",
  "secondary-three": "#DCDCDC",
}
```

### Polices
Le projet utilise la police SF Pro Display avec plusieurs variantes. Les polices sont chargées via le fichier `stylesheet.css` dans le dossier `assets/fonts/`.

### Images
- Les images de la section Bento sont stockées dans `assets/images/bento/`
- Les logos des partenaires sont dans `assets/images/logo/`
- Les images générales sont à la racine de `assets/images/`

## 🔧 Fonctionnalités Principales

### Animations au Défilement
Le projet utilise Locomotive Scroll pour des animations fluides au défilement :
```javascript
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  lerp: 0.07
});
```

### Carrousel de Témoignages
Un carrousel interactif présente les témoignages des utilisateurs avec navigation tactile sur mobile.

### Design Responsive
Le site est entièrement responsive avec des breakpoints optimisés pour :
- Mobile (< 640px)
- Tablette (640px - 1024px)
- Desktop (> 1024px)

## 📱 Compatibilité

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)
- Mobile browsers (iOS/Android)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commit vos changements
4. Push sur la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## ✍️ Auteur

Développé par MakVieSAinte

---

&copy; 2025 RAFT. Tous droits réservés.