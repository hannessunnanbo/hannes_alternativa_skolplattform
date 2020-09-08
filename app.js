const express = require('express');
const fetch = require("node-fetch")
const app = express();
const port = process.env.PORT || 3000;
 
app.use(express.static('public'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const RSS_URL = `https://skolmaten.se/orbyskolan2/rss/weeks/?limit=2`;

fetch(RSS_URL)
  .then(response => response.text())
  .then(data => console.log(data))