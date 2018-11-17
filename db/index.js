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
  max: 300,
})
// .catch(err => console.log(err, "err on db connect"))


// knex.schema.hasTable('items').then(function(exists) {
//   if (!exists) {
//     return knex.schema.createTable('items', function (table) {
//       table.increments()
//       table.string('name')
//       table.decimal('price')
//       table.decimal('sale_price')
//       table.integer('average_score')
//       table.date('deal_ends')
//       table.integer('units_sold')
//       table.string('shipping_option')
//       table.integer('drop_count')
//     })
//     .then(()=> console.log("item table created"))
//     .catch(err => console.log(err, "error in create item table"))
//   }
// })

// knex.schema.hasTable('categories').then(function(exists) {
//   if (!exists) {
//     return knex.schema.createTable('categories', function (table) {
//       table.increments()
//       table.string('name')
//     })
//     .then(()=> console.log("categories table created"))
//     .catch(err => console.log(err, "error in create categories table"))
//   }
// })
module.exports = {
  knex: knex,
}

//        MONGODB

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/productInfo', { useNewUrlParser: true })
// mongoose.Promise = global.Promise;

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// db.once('open', function() {
//   console.log('mongoose connected successfully');
// });

// var productSchema = mongoose.Schema({
//   productName: String,
//   price: mongoose.Schema.Types.Decimal128,
//   sale_price: mongoose.Schema.Types.Decimal128,
//   average_score: String,
//   deal_ends: Date,
//   units_sold: Number,
//   shipping_option: String,
//   drop_count: Number,
// });

// var Product = mongoose.model('Product', productSchema);

// db.close();

// module.exports = {
//   db: db,
//   Product: Product,
//   knex: knex,
// }