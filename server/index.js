// require('newrelic');
const express = require('express');
const parser = require('body-parser');
const environment = process.env.NODE_ENV || 'production';    // if something else isn't setting ENV, use development
const configuration = require('../knexfile')[environment];    // require environment's settings from knexfile
const knex = require('knex')(configuration);  // connect to DB via knex using env's settings
const {db, Product} = require('../db/index.js');
const path = require('path');
const redis = require('redis');
const compression = require('compression');
import React from 'react';
import { renderToString } from 'react-dom/server';
import ProductInfo from '../react-client/src/index.jsx';
import template from '../react-client/dist/template.js';
import { ServerStyleSheet } from 'styled-components'; // <-- importing ServerStyleSheet


let app = express();
app.use(parser.json());
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(compression())
// connect to Redis
// const REDIS_URL = process.env.REDIS_URL;
const client = redis.createClient();

client.on('connect', () => {
    console.log(`connected to redis`);
});
client.on('error', err => {
    console.log(`Error: ${err}`);
});

// app.use('^/$', serverRenderer);
    // ORIGINAL

    
// app.get('/api/:prod_name', (req, res) => {
//   let prod_name = req.params.prod_name;
//   let q = `select name, price, sale_price, number_of_reviews, average_score, unix_timestamp(deal_ends) as time, units_sold, shipping_option, drop_count 
//   from items where items.name = '${prod_name}'`
//   db.connection.query(q, (err, results) => {
//     if (err) {
//       if (err.message === '404') res.status(404).send(err);
//       else res.sendStatus(500);
//     }
//     else res.send(results);
//   })
// })

// app.get('/api/categories/:prod_name', (req, res) => {
//   let prod_name = req.params.prod_name;
//   let q = `select c.name from categories c inner join items_categories ic on (c.category_id = ic.catID)
//           inner join items i on (ic.itemID = i.item_id) where i.name = '${prod_name}'`
//   db.connection.query(q, (err, results) => {
//     if (err) {
//       if (err.message === '404') res.status(404).send(err);
//       else res.sendStatus(500);
//     }
//     else res.send(results);
//   })
// })

// app.post('/api/drop', (req, res) => {
//   var prod_name = req.body.name;
//   var count = req.body.drop_count + 1;
//   if (count % 5 === 0) {
//     var oldPrice = req.body.sale_price || req.body.price;
//     var newPrice = oldPrice * .9;
//     var q = `update items set drop_count = ${count},
//             price = ${oldPrice},
//             sale_price = ${newPrice}
//             where name = '${prod_name}'`
//   } else {
//     var q = `update items set drop_count = ${count} where name = '${prod_name}'`
//   }
  
//   db.connection.query(q, (err) => {
//     if (err) {
//       if (err.message === '404') res.status(404).send(err);
//       else res.sendStatus(500);
//     }
//     else res.sendStatus(201);
//   })
// })

// KNEX

app.get('/api/:prod_id', (req, res) => {
  let prod_id = req.params.prod_id;

  client.get(prod_id, function(err, info) {
    if (info) {
      return res.json(JSON.parse(info));
    }
    knex.raw(`select * from "items" where id = ${prod_id}`)
      .then(results => {
        parseInt(results.rows[0].drop_count)
        client.set(
          prod_id, JSON.stringify({info: results.rows[0]}), function(err, result) {
          if (err) console.log(err);
        });
        res.status(200).send(results.rows[0])
      })
      .catch(err => console.log(err, 'error in get api prod name'))
  })
})

// app.get('/api/categories/:prod_name', (req, res) => {
//   let prod_name = req.params.prod_name;
//   knex.select('category').from('items').where({'name' : prod_name.toString()}).limit(1)
//   .then(results => {
//     res.status(200).send(results);
//     knex.destroy();
//   })
//   .catch(err => {
//     console.log(err, "error in get api categories") 
//     err.message === '404' ? res.status(404).send(err) : res.status(500).send(err)
//   })
// })

app.post('/api/drop', (req, res) => {
  var count = parseInt(req.body.drop_count) + 1;
  var id = req.body.id;
  const infoKey = `${id}:info`;
  if (count % 5 === 0) {
    var oldPrice = req.body.sale_price || req.body.price;
    var newPrice = oldPrice * .9;
    knex.raw(`update "items" set drop_count = ${count}, price = ${oldPrice}, sale_price = ${newPrice} where id = ${id} returning *`)
    .then(results => {
      client.set(
        id, JSON.stringify({info: results.rows[0]}), function(err, result) {
        if (err) console.log(err);
      });
      res.status(201).send() 
    })
    .catch(err => {
      console.log(err, "error in updating drop count by 5")
    })
  } else {
    knex.raw(`update "items" set drop_count = ${count} where id = ${id} returning *`)
    .then(results => {
      client.set(
        id, JSON.stringify({info: results.rows[0]}), function(err, result) {
        if (err) console.log(err);
      });
      res.status(201).send()
    })
    .catch(err => {
      console.log(err, "error in updating drop count")
    })
  }
})

// MONGODB

// app.get('/api/:prod_name', (req, res) => {
//   let prod_name = req.params.prod_name;
//   Product.find({"name" : prod_name.toString()}).limit(1)
//     .then(results => {
//       console.log(results);
//       res.status(200).send(results)
//     })
//     .catch(err => console.log(err, 'error in get api prod name'))
// })

// STATIC
// app.get('/buy/*', (req, res) => {
//   res.sendFile(path.resolve('react-client/dist/index.html'));
// })
app.get('/buy/:prod_id', (req, res) => {
  let prod_id = req.params.prod_id;
  knex.raw(`select * from "items" where id = ${prod_id}`)
  .then(results => {
    const initialState = { reminder: false, info: results.rows[0], categories: results.rows[0].category[results.rows[0].category.length-1] === 's' ? results.rows[0].category : results.rows[0].category +'s' }
    const sheet = new ServerStyleSheet(); // <-- creating out stylesheet
    const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet
    const appString = renderToString(React.createElement(ProductInfo, initialState));
    res.send(template({
      body: appString,
      styles: styles,
      initialState: JSON.stringify(initialState),
    }));
  })
  .catch(err => console.log(err, 'error in get buy prod name'))
});

app.get('*.js', function(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javscript');
  next();
 });
 app.get('*.css', function(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/css');
  next();
 });

 app.get('/loaderio-*', function(req, res, next) {
  res.sendFile(path.resolve('./loaderio-c6c352d14360b97cc35d42093c086fd1.txt'));
 });

 app.get('/productinfohtml/:prod_id', (req, res) =>{
  let prod_id = req.params.prod_id;
  knex.raw(`select * from "items" where id = ${prod_id}`)
  .then(results => {
    const initialState = { reminder: false, info: results.rows[0], categories: results.rows[0].category[results.rows[0].category.length-1] === 's' ? results.rows[0].category : results.rows[0].category +'s' }
    const appString = renderToString(React.createElement(ProductInfo, initialState));
    res.send({appString, initialState});
  })
  .catch(err => console.log(err, 'error in get buy prod name'))
});

let port = 3009;
app.listen(process.env.PORT || port, () => {
  console.log(`listening on port ${port}...`);
})

