const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());


// GET method route
app.get('/neuille', (req, res) => {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/prout', (req, res) => {
  res.send('POST request to the homepage')
})
