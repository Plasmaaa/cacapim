const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');

// Configuration de la base de données
const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost', // adresse de votre base de données PostgreSQL
    user: 'votre_utilisateur',
    password: 'votre_mot_de_passe',
    database: 'votre_base_de_donnees'
  }
});

const app = express();
app.use(bodyParser.json());

// Endpoint pour l'inscription
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  db('users')
    .insert({ email, password })
    .returning('*')
    .then(user => {
      res.json(user[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Une erreur est survenue lors de l\'inscription.' });
    });
});

// Endpoint pour la connexion
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db('users')
    .where({ email, password })
    .then(users => {
      if (users.length === 1) {
        res.json({ message: 'Connexion réussie.' });
      } else {
        res.status(401).json({ message: 'Adresse email ou mot de passe incorrect.' });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Une erreur est survenue lors de la connexion.' });
    });
});

// Démarre le serveur sur le port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
