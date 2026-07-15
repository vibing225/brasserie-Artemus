# Brasserie Artemus - Site Web Officiel

Site web premium pour Brasserie Artemus, une brasserie artisanale française familiale.

## 🎨 Design & Style

- **Palette de couleurs** : Dark élégant avec accents dorés et cuivrés
- **Typographie** : Cormorant Garamond (titres) et Inter (corps)
- **Style** : Artisanal, premium, authentique, traditionnel
- **Inspirations** : Fûts de bois, cuves de cuivre, éclairage chaleureux, brasserie traditionnelle

## 🛠 Technologies Utilisées

- HTML5
- CSS3
- JavaScript (Vanilla)
- Bootstrap 5 (layout & responsive)
- AOS (Animate On Scroll)
- Google Fonts (Cormorant Garamond, Inter)
- Bootstrap Icons

## 📁 Structure du Projet

```
Artemus/
├── css/
│   └── styles.css          # Feuille de style principale
├── js/
│   └── main.js             # JavaScript principal
├── images/                 # Images du site
├── pages/
│   ├── notre-histoire.html # Page Histoire
│   ├── nos-bieres.html     # Page Bières
│   ├── galerie.html        # Page Galerie
│   ├── contact.html        # Page Contact
│   ├── mentions-legales.html           # Mentions légales
│   ├── politique-confidentialite.html  # Politique de confidentialité
│   ├── gestion-cookies.html            # Gestion des cookies
│   └── plan-site.html                 # Plan du site
├── index.html              # Page d'accueil
└── README.md               # Documentation
```

## 📄 Pages du Site

### 1. Accueil (index.html)
- Hero section avec parallax
- Introduction
- Bières vedettes
- Valeurs de la brasserie
- Processus de brassage
- Statistiques
- Aperçu galerie
- Call to action
- Localisation

### 2. Notre Histoire
- Hero section
- Introduction à l'histoire
- Héritage familial (3 générations)
- Valeurs fondamentales
- Timeline historique
- Savoir-faire traditionnel
- Archives photos
- Citation
- Call to action

### 3. Nos Bières
- Hero section
- Introduction
- Filtres par style (Blonde, Ambrée, IPA, Stout, Blanche, Saison)
- Cartes de bières détaillées avec :
  - Image
  - Nom et style
  - Statistiques (Alcool %, IBU)
  - Description
  - Profil de saveurs
  - Ingrédients
  - Accords mets
- Processus de brassage
- Call to action

### 4. Galerie
- Hero section
- Introduction
- Filtres par catégorie (Brasserie, Brassage, Bières, Événements, Équipe)
- Galerie masonry avec lightbox
- Call to action

### 5. Contact
- Hero section
- Informations de contact
- Carte Google Maps interactive
- Formulaire de contact
- Horaires d'ouverture
- FAQ
- Réseaux sociaux

### Pages Légales
- Mentions légales
- Politique de confidentialité
- Gestion des cookies
- Plan du site

## ✨ Fonctionnalités

### Navigation
- Navigation sticky avec effet de transparence
- Changement de fond au scroll
- Animation hover avec soulignement doré
- Indicateur de page active
- Menu mobile responsive

### Animations
- AOS (Animate On Scroll) pour les animations au défilement
- Effets parallax sur les hero sections
- Animations de hover sur les cartes et boutons
- Compteurs animés pour les statistiques
- Micro-interactions fluides

### Responsive Design
- Mobile-first approach
- Support complet : smartphones, tablets, laptops, desktops, ultra-wide
- Menu hamburger sur mobile
- Grilles adaptatives
- Images responsive
- Typographie fluide

### Accessibilité
- Skip to content link
- ARIA labels
- Navigation clavier
- Contraste des couleurs
- Balises sémantiques HTML5

### SEO
- Meta tags uniques par page
- Open Graph tags
- Balises sémantiques
- Structure de headings hiérarchique
- Alt text sur les images
- URLs friendlies

### Légalité Française
- Mentions légales
- Politique de confidentialité (RGPD)
- Gestion des cookies
- Bannière de consentement cookies
- Liens légaux dans le footer

## 🎨 Palette de Couleurs

- **Background principal** : #141414
- **Background secondaire** : #1F1F1F
- **Background tertiaire** : #2A2A2A
- **Accent doré** : #C79A45
- **Accent cuivré** : #A86E2D
- **Texte principal** : #F5F3EE
- **Texte muted** : #9D9D9D
- **Accent olive (optionnel)** : #4A5D3E

## 🚀 Installation & Utilisation

1. Clonez ou téléchargez le projet
2. Ouvrez `index.html` dans un navigateur web
3. Pour un développement local, utilisez un serveur local (Live Server, etc.)

## 📱 Compatibilité

- Chrome (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Edge (dernières versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Personnalisation

### Modifier les couleurs
Éditez les variables CSS dans `css/styles.css` :
```css
:root {
    --bg-primary: #141414;
    --accent-gold: #C79A45;
    /* ... */
}
```

### Modifier les images
Remplacez les URLs Unsplash par vos propres images dans le dossier `images/`

### Modifier le contenu
Éditez directement les fichiers HTML pour modifier le texte et le contenu

## 📝 Notes de Développement

- Le site utilise des images placeholder Unsplash
- Les formulaires sont configurés côté client (backend nécessaire pour l'envoi réel)
- La carte Google Maps utilise un embed statut (clé API nécessaire pour personnalisation)
- Les cookies sont gérés via localStorage

## 🤝 Support

Pour toute question ou modification, contactez l'équipe de développement.

---

**Brasserie Artemus** - L'Art de la Bière Artisanale depuis 1923
