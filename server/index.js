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
  let q = `select name, price, sale_price, number_of_reviews, average_score, unix_timestamp(deal_ends) as time, units_sold, shipping_option 
  from items where items.item_id = ${id}`
  db.connection.query(q, (err, results) => {
    if (err) console.log('error on db query: ', err);
    else res.send(results);
  })
})

app.get('/categories/:id', (req, res) => {
  let id = req.params.id;
  let q = `select c.name from categories c inner join items_categories ic on (c.category_id = ic.catID)
          inner join items i on (ic.itemID = i.item_id) where i.item_id = ${id}`
  db.connection.query(q, (err, results) => {
    if (err) console.log('error on db category query: ', err);
    else res.send(results);
  })
})

let port = 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
})