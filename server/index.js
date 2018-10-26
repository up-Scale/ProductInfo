var express = require('express');
var parser = require('body-parser');
var db = require('../db/index.js');
var path = require('path');

let app = express();
app.use(parser.json());
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/:id', (req, res) => {
  res.sendFile(path.resolve('react-client/dist/index.html'));
})

app.get('/item/:id', (req, res) => {
  let id = req.params.id;
  q = `select items.name, items.price from items where items.item_id = ${id}`
  db.connection.query(q, (err, results) => {
    if (err) console.log('error on db query: ', err);
    else (res.send(results));
  })
})

let port = 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
})