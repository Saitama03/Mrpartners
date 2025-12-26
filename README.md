# MR Partners — Site vitrine (Next.js)

Site professionnel pour MR Partners, cabinet d’expertise comptable (fiscal) certifié ITAA.

Le site met en avant les services de comptabilité, fiscalité et audit, avec une page d’accueil soignée, une navigation claire, des sections dédiées et des assets de marque.

## Fonctionnalités

- Page d’accueil complète (Hero, Services, Spécialisations, Contact CTA, Footer)
- Pages dédiées: À propos, Comptabilité, Fiscalité, Audit, Autres services, Contact
- Design responsive et animations légères (cartes services, CTA)
- Optimisation des polices via `next/font` (Inter, Outfit) et base CSS professionnelle (DM Sans)
- Assets de marque et d’illustration (public/)

## Pile technique

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4 (via @tailwindcss/postcss)
- ESLint (Core Web Vitals)

## Scripts

- `npm run dev` — démarre le serveur de développement
- `npm run build` — build de production
- `npm run start` — démarre le serveur en production
- `npm run lint` — linting du code

## Démarrage local

1. Installer les dépendances:

```bash
npm install
```

2. Lancer le serveur de développement:

```bash
npm run dev
```

3. Ouvrir http://localhost:3000

## Structure du projet (extrait)

```
app/
  aboutus/
  audit/
  autres-services/
  comptabilite/
  contact/
  fiscalite/
  layout.js
  page.js
public/
  logo.jpg
  hero_main.png
  audit.png
  accounting.png
  taxation.png
  contact_bg.png
```

## Configuration

- `eslint.config.mjs` — configuration ESLint (Core Web Vitals)
- `postcss.config.mjs` — configuration PostCSS pour Tailwind CSS 4
- `next.config.mjs` — configuration Next.js
- `jsconfig.json` — alias `@/*` vers la racine du projet

## Déploiement

Le projet peut être déployé sur Vercel, Netlify ou toute autre plateforme compatible Next.js.

- Build de production: `npm run build`
- Lancement: `npm run start`

## Licence

© MR Partners. Tous droits réservés.