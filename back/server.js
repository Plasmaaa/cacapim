const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database_name'
  }
});

const app = express();
app.use(bodyParser.json());

// Route GET pour la racine
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon serveur Node.js!');
});

// Route pour obtenir toutes les images
app.get('/images', (req, res) => {
  knex.select('id', 'image_data').from('images')
    .then(images => {
      res.json(images);
    })
    .catch(err => {
      console.error('Error retrieving images:', err);
      res.status(500).json({ message: 'Failed to retrieve images' });
    });
});


app.post('/upload-image', (req, res) => {
  const { imageData } = req.body;
  knex('images').insert({ image_data: imageData })
    .then(ids => {
      res.json({ id: ids[0], message: 'Image saved successfully' });
    })
    .catch(err => {
      console.error('Error saving image:', err);
      res.status(500).json({ message: 'Failed to save image' });
    });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
