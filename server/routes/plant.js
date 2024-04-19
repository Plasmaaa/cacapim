const { Router } = require("express");
const fs = require('fs/promises');

async function identifyPlant(imageData, location) {
  const myHeaders = new Headers();
  myHeaders.append("Api-Key", "IJEq1wnZ6kOWU1MTU7igjqRaqEOGDlW3WtNuANz2UtQSbrE4lD");
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({
    "images": [imageData
    ],
    ...location,
    "similar_images": true
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };

  const resp = await fetch("https://plant.id/api/v3/identification", requestOptions)
  return await resp.json();

}

const router = Router();

router.get("/articles", async (req, res) => {
  try {
    const articles = await Article.getArticles();
    res.json(articles);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/scan", async (req, res) => {
  try {
    const { imageData } = req.body;
    const result = await identifyPlant(imageData, {
      "latitude": 49.207,
      "longitude": 16.608
    });
    console.log(result, result.result.classification, result.result.classification.suggestions[0]);
    
    // recuper le nom à partir du résultat
    // rechercher en base la plante associé au nom
    const plant = { id: 1 }
    const filename = `${req.user.id}_${plant.id}_${Date.now()}.png`;
    await fs.writeFile(__dirname + "/../uploads/" + filename, Buffer.from(imageData.split(',')[1], 'base64'));
    const scanData = {
      user_id: req.user.id,
      plant_id: plant.id,
      image_src: filename
    }
    // creer en base une ligne dans la table scan
    res.status(201).json(scanData);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/articles/:id", async (req, res) => {
  try {
    const article = await Article.getArticleById(parseInt(req.params.id));
    res.json(article);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/articles/:id", async (req, res) => {
  try {
    const article = await Article.updateArticle(
      parseInt(req.params.id),
      req.body
    );
    res.json(article);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/articles/:id", async (req, res) => {
  try {
    await Article.deleteArticle(parseInt(req.params.id));
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
