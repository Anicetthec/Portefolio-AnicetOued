# Portfolio d’Anicet Ouédraogo

Portfolio personnel développé avec React, Vite et Tailwind CSS. Le site présente mes projets, mes compétences, mon parcours et mes coordonnées.

## Fonctionnalités

- Interface responsive pour téléphones, tablettes et ordinateurs.
- Menu de navigation adapté aux petits écrans.
- Filtres de projets par catégorie et détails de projet dépliables.
- Thème clair/sombre mémorisé dans le navigateur.
- Formulaire de contact Netlify Forms, lien e-mail et accès direct à WhatsApp.

## Prérequis

- Node.js **20.19 ou supérieur** (Vite 8).
- npm, installé avec Node.js.
- Un compte GitHub pour héberger le code et un compte Netlify pour publier le site.

## Lancer le site sur son ordinateur

Dans un terminal, ouvrir le dossier du projet puis lancer :

```bash
npm install
npm run dev
```

Vite affiche une adresse locale, généralement `http://localhost:5173`. Ouvrez-la dans votre navigateur. Pour arrêter le serveur, utilisez `Ctrl+C` dans le terminal.

Pour vérifier la version de production avant de la publier :

```bash
npm run build
npm run preview
```

Le premier script génère le site optimisé dans `dist/`. Le second lance un aperçu local du contenu généré.

## Mettre à jour la photo

La photo affichée sur la page d’accueil est `public/assets/anicet.png`. Pour la remplacer, ajoutez la nouvelle image dans `public/assets/`, puis modifiez le chemin `src` de l’image de profil dans `src/App.jsx`. Par exemple :

```jsx
src="/assets/ma-photo.jpg"
```

Les images placées dans `public/` sont publiées telles quelles et restent accessibles à partir de `/assets/`.

## Ajouter ou modifier un projet

Les projets et leurs informations sont déclarés dans le tableau `projects` de `src/App.jsx`. Chaque entrée contient notamment son titre, sa catégorie, sa date, son résumé, ses détails et ses mots-clés. Les catégories de filtres disponibles sont :

- `web` — applications web ;
- `tools` — outils ;
- `network` — réseaux et énergie ;
- `design` — design graphique.

Les illustrations des projets sont des composants React déclarés dans ce même fichier. Pour un nouveau visuel, créer un composant puis l’associer dans `ProjectCard`. Remplacer les liens GitHub généraux par les URL dédiées aux projets dès qu’elles sont disponibles ; ne renseigner une démo qu’une fois publiée.

## Publier le projet sur GitHub

1. Créer un dépôt **vide** sur GitHub. Il n’est pas nécessaire d’y générer un README, une licence ou un `.gitignore`, car ces fichiers existent déjà dans ce projet.
2. Dans le terminal, depuis le dossier du projet, initialiser Git et enregistrer les fichiers :

   ```bash
   git init
   git add .
   git commit -m " Portfolio Anicet"
   git branch -M main
   ```

3. Copier l’adresse HTTPS du dépôt GitHub, puis l’ajouter comme dépôt distant (remplacer l’adresse d’exemple par celle affichée par GitHub) :

   ```bash
   git remote add origin https://github.com/VOTRE-COMPTE/VOTRE-DEPOT.git
   git push -u origin main
   ```

4. Pour publier les modifications suivantes :

   ```bash
   git add .
   git commit -m "Mettre à jour le portfolio"
   git push
   ```

Le fichier `.gitignore` exclut notamment `node_modules/`, `dist/` et les fichiers locaux de configuration d’environnement. Ne placez jamais de mot de passe, clé privée ou autre secret dans le dépôt.

## Déployer sur Netlify

### 1. Relier le dépôt GitHub

1. Connectez-vous à [Netlify](https://app.netlify.com/).
2. Choisissez **Add new site** puis **Import an existing project**.
3. Sélectionnez **GitHub**, autorisez Netlify à accéder au dépôt et choisissez le dépôt de ce portfolio.
4. Si Netlify demande les paramètres de compilation, indiquez :
   - **Base directory** : laisser vide (racine du dépôt) ;
   - **Build command** : `npm run build` ;
   - **Publish directory** : `dist`.
5. Dans les variables d’environnement du site Netlify, définir `NODE_VERSION` à `20.19.0` ou plus récent si l’image de build Netlify utilise une version de Node trop ancienne.
6. Lancer **Deploy site** et attendre que le déploiement indique qu’il a réussi.

Ces paramètres sont aussi présents dans [`netlify.toml`](./netlify.toml). Une fois le dépôt connecté, Netlify reconstruit et republie le site à chaque `git push` sur la branche configurée.

### 2. Activer et vérifier le formulaire

Le formulaire s’appelle `contact`. Il envoie à Netlify le nom, l’adresse e-mail, l’objet et le message.

1. Après le premier déploiement, ouvrir le site dans Netlify et aller dans **Forms**.
2. Si Netlify propose d’activer la détection des formulaires, l’activer.
3. Si nécessaire, déclencher un nouveau déploiement après activation pour que Netlify analyse le formulaire HTML produit dans `dist/index.html`.
4. Ouvrir le site public, soumettre un message de test, puis vérifier qu’il apparaît dans **Forms → contact**.
5. Pour recevoir aussi un avis dans votre boîte e-mail, ouvrir les paramètres ou les notifications du formulaire dans Netlify et ajouter une **notification par e-mail**. L’enregistrement des soumissions et les notifications e-mail sont deux réglages distincts.

Le formulaire Netlify ne reçoit pas de soumissions depuis le serveur de développement local : faites le test final sur l’adresse publiée par Netlify. Si aucun formulaire n’apparaît, vérifier que `dist/index.html` contient le formulaire caché `name="contact"` et que Netlify a analysé le dernier déploiement.

### 3. Adresse du site et domaine personnel (facultatif)

Netlify fournit une adresse publique en `netlify.app`. Pour choisir un autre sous-domaine, ouvrir les paramètres de domaine du site dans Netlify. Pour associer un domaine acheté, l’ajouter dans la gestion des domaines Netlify et suivre les instructions DNS affichées par la plateforme. Attendre la validation DNS et l’activation HTTPS avant de partager le domaine.

## Formulaire, e-mail et WhatsApp

- Les messages du formulaire sont consultables dans Netlify, sous **Forms → contact**. Leur réception par e-mail nécessite de configurer une notification Netlify.
- Le lien e-mail ouvre le logiciel de messagerie du visiteur avec votre adresse préremplie.
- Le bouton WhatsApp ouvre [votre contact WhatsApp](https://wa.me/qr/O3XT7G4GRZ4FI1?s=r).

## Vérifier l’affichage responsive

La page est conçue pour s’adapter aux petits téléphones, aux tablettes et aux grands écrans : menu replié sur mobile, une colonne de projets sur téléphone, deux sur tablette et trois sur ordinateur, formulaire empilé sur téléphone et présenté côte à côte sur grand écran. Après une modification graphique, vérifier au minimum les largeurs 320 px, 390 px, 768 px et 1440 px avec les outils responsive du navigateur.
