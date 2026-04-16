# TP 3 : Express.js + Pool Query (PostgreSQL) + EJS

## 📖 Description

Ce projet est une application web développée avec **Node.js et Express** permettant de gérer une liste d’utilisateurs.
Il s’agit d’un TP CRUD (Create, Read, Update, Delete) avec une base de données PostgreSQL et un moteur de templates EJS pour l’affichage.

---

## 🚀 Fonctionnalités

* Affichage de la liste des utilisateurs (10 derniers)
* Ajout d’un utilisateur
* Modification des informations d’un utilisateur
* Suppression d’un utilisateur
* Validation des données avec `express-validator`
* Gestion des erreurs (404 / 500)
* Interface dynamique avec EJS

---

## 🛠️ Technologies utilisées

* Node.js
* Express.js
* EJS (templating)
* PostgreSQL (`pg`)
* express-validator
* dotenv
* nodemon (développement)

---

## 📁 Structure du projet

```
mon-projet-express/
│── app.js
│── package.json
│── .env
│
├── config/
│   └── db.js
│
├── routes/
│   └── index.js
│
├── views/
│   └── pages/
│       └── home.ejs
│
├── public/
│   └── (css, js, images)
```

---

## ⚙️ Installation

### 1. Cloner le projet

```bash
git clone <repo>
cd mon-projet-express
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configurer la base de données

Créer un fichier `.env` :

```env
PORT=3000
```

Configurer ensuite la connexion PostgreSQL dans `config/db.js`.

---

## ▶️ Lancer le projet

### Mode normal :

```bash
node app.js
```

### Mode développement (avec nodemon) :

```bash
npx nodemon app.js
```

---

## 🌐 Fonctionnement des routes

| Méthode | Route             | Description               |
| ------- | ----------------- | ------------------------- |
| GET     | /                 | Afficher les utilisateurs |
| POST    | /users            | Ajouter un utilisateur    |
| POST    | /users/:id/edit   | Modifier un utilisateur   |
| POST    | /users/:id/delete | Supprimer un utilisateur  |

---

## 🧠 Objectif pédagogique

Ce TP permet de comprendre :

* La création d’un serveur Express
* La gestion des routes
* L’intégration d’une base de données PostgreSQL
* La validation des formulaires
* Le rendu dynamique avec EJS

---

## 👨‍💻 Auteur

Ait Hmad Oussama 
