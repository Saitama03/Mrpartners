# MR Partners — Site vitrine (Next.js)

Site professionnel pour MR Partners, cabinet d'expertise comptable (fiscal) certifié ITAA.

Le site met en avant les services de comptabilité, fiscalité et audit, avec une page d'accueil soignée, une navigation claire, des sections dédiées et des assets de marque.

## Fonctionnalités

- Page d'accueil complète (Hero, Services, Spécialisations, Contact CTA, Footer)
- Pages dédiées: À propos, Comptabilité, Fiscalité, Audit, Autres services, Contact
- Design responsive et animations légères (cartes services, CTA)
- Optimisation des polices via `next/font` (Inter, Outfit) et base CSS professionnelle (DM Sans)
- Assets de marque et d'illustration (public/)
- Navigation optimisée avec `next/link` pour le client-side routing

## Pile technique

| Technologie  | Version             |
| ------------ | ------------------- |
| Next.js      | 16.1.1 (App Router) |
| React        | 19.2.3              |
| Tailwind CSS | 4                   |
| Node.js      | 23.1 (Alpine)       |
| ESLint       | 9 (Core Web Vitals) |

## Scripts

| Commande        | Description                         |
| --------------- | ----------------------------------- |
| `npm run dev`   | Démarre le serveur de développement |
| `npm run build` | Build de production                 |
| `npm run start` | Démarre le serveur en production    |
| `npm run lint`  | Linting du code                     |

---

## 🚀 Démarrage

### Développement local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

### Production avec Docker

```bash
# Build et démarrage
docker-compose up --build -d

# Voir les logs
docker-compose logs -f web

# Arrêter
docker-compose down
```

---

## 🐳 Docker

Le projet est configuré pour un déploiement Docker en production.

### Fichiers Docker

| Fichier              | Description                                        |
| -------------------- | -------------------------------------------------- |
| `Dockerfile`         | Multi-stage build (base → deps → builder → runner) |
| `docker-compose.yml` | Orchestration des services                         |
| `.dockerignore`      | Fichiers exclus du build                           |
| `.env`               | Variables d'environnement                          |

### Architecture Docker

```
┌─────────────────────────────────────────────────────────────┐
│                       Dockerfile                            │
├─────────────────────────────────────────────────────────────┤
│  base    │ Node.js 23.1 Alpine 3.20                        │
│  deps    │ Installation des dépendances (npm ci)           │
│  builder │ Build Next.js (npm run build)                   │
│  runner  │ Production (standalone server)                  │
│  dev     │ Développement (npm run dev)                     │
└─────────────────────────────────────────────────────────────┘
```

### Variables d'environnement (.env)

```env
TAG=1.0.0
ALPINE_VERSION=3.20
NODE_VERSION=23.1
WEB_PORT=3000
```

### Commandes Docker

```bash
# Build production
docker build -t mrpartners --target runner .

# Build développement
docker build -t mrpartners-dev --target dev .

# Run avec docker-compose
docker-compose up --build -d

# Vérifier le statut
docker-compose ps

# Logs en temps réel
docker-compose logs -f web
```

---

## 📁 Structure du projet

```
mrpartner/
├── app/
│   ├── aboutus/
│   │   └── page.js
│   ├── audit/
│   │   └── page.js
│   ├── autres-services/
│   │   └── page.js
│   ├── comptabilite/
│   │   └── page.js
│   ├── contact/
│   │   └── page.js
│   ├── fiscalite/
│   │   └── page.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
│   ├── logo.jpg
│   ├── hero_main.png
│   ├── audit.png
│   ├── accounting.png
│   ├── taxation.png
│   └── contact_bg.png
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .env
├── next.config.mjs
├── package.json
└── README.md
```

---

## ⚙️ Configuration

| Fichier              | Description                                    |
| -------------------- | ---------------------------------------------- |
| `next.config.mjs`    | Configuration Next.js (`output: 'standalone'`) |
| `eslint.config.mjs`  | Configuration ESLint (Core Web Vitals)         |
| `postcss.config.mjs` | Configuration PostCSS pour Tailwind CSS 4      |
| `jsconfig.json`      | Alias `@/*` vers la racine du projet           |

---

## 🏥 Health Check

Le conteneur Docker inclut un health check automatique:

```yaml
healthcheck:
  test: ["CMD", "wget", "-qO-", "--spider", "http://localhost:3000"]
  interval: 30s
  timeout: 10s
  retries: 3
  start_period: 30s
```

---

## 🔒 Sécurité

- ✅ Exécution en utilisateur non-root (`node`)
- ✅ Télémétrie Next.js désactivée
- ✅ Fichiers sensibles exclus du build (`.dockerignore`)
- ✅ Variables d'environnement via `.env`

---

## 📦 Déploiement

### Option 1: Docker (Recommandé)

```bash
docker-compose up --build -d
```

### Option 2: Vercel / Netlify

Le projet est compatible avec les plateformes de déploiement Next.js:

- Vercel
- Netlify
- Railway
- Render

### Option 3: Serveur classique

```bash
npm run build
npm run start
```

---

## 📄 Licence

© MR Partners. Tous droits réservés.
