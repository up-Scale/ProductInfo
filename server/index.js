var express = require('express');
var parser = require('body-parser');
var db = require('../db/index.js');

let app = express();
app.use(parser.json());
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/item/:id', (req, res) => {
  console.log(req);
})

let port = 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
})