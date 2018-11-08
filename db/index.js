//        ORIGINAL


// var db = require('mysql');
// //var pass = require('../config.js');

// const connection = db.createConnection({
//   host: 'fec-product-info.clj3efkrub7r.us-east-2.rds.amazonaws.com',
//   user: 'johnsangiolo',
//   password: 'Seniorphase014',
//   database: 'product_info'
// });

// module.exports.connection = connection;


//         POSTGRESQL


// const { Pool, Client } = require('pg')
// var conString = "postgres://kennisilverio:nopass@localhost:3001/productInfo";

// const pool = new Pool({
//   connectionString: conString,
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
// })

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// });

// const client = new Client({
//   connectionString: conString,
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
// })

// client.connect()

// client.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   client.end()
// })

// const text = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *'
// const values = ['brianc', 'brian.m.carlson@gmail.com']

// client.query(text, values)
//   .then(res => {
//     console.log(res.rows[0])
//     // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
//   })
//   .catch(e => console.error(e.stack))

// const fetchItem = {
//   // give the query a unique name
//   name: 'fetch-item',
//   text: 'SELECT * FROM items WHERE id = $1',
//   values: [1]
// }

// client.query(fetchItem)
//       .then(res => console.log(res.rows[0]))
//       .catch(e => console.error(e.stack))



// module.exports.connection = client;



//    KNEX


var knex = require('knex')({
  client: 'pg',
  version: '7.6',
  connection: {
    host : 'localhost',
    user : 'kennisilverio',
    password : '',
    database : 'productInfo'
  },
  pool: { min: 0, max: 7 },
  useNullAsDefault: true,
});


knex.schema.hasTable('items').then(function(exists) {
  if (!exists) {
    knex.schema.createTable('items', function (table) {
      table.increments()
      table.string(name)
      table.decimal(price)
      table.decimale(sale_price)
      table.integer(average_score)
      table.date(deal_ends)
      table.integer(units_sold)
      table.string(shipping_option)
      table.integer(drop_count)
    })
    .then(()=> console.log("item table created"), knex.destroy())
    .catch(err => console.log("error in create item table"))
  }
})

knex.schema.hasTable('categories').then(function(exists) {
  if (!exists) {
    knex.schema.createTable('categories', function (table) {
      table.increments()
      table.string(name)
    })
    .then(()=> console.log("categories table created"), knex.destroy())
    .catch(err => console.log("error in create categories table"))
  }
})



// REDIS
module.exports = {
  knex: knex,
}

