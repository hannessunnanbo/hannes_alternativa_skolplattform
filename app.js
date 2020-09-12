const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const meny = require("./meny");
const { request, response } = require('express');
const { hamtaMeny } = require('./meny');
 
app.use(express.static('public'));
app.get("/meny", (request, response) => {
  response.charset = "utf-8";
  hamtaMeny().then(data => {
    response.send(data);
  });

});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

