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



//    SEQUELIZE


const Sequelize = require('sequelize');
const sequelize = new Sequelize('productInfo', 'kennisilverio', '', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Item = sequelize.define('item', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING, 
  },
  price: {
    type: Sequelize.DECIMAL,
  }, 
  sale_price: {
    type: Sequelize.DECIMAL,
  }, 
  average_score: {
    type: Sequelize.INTEGER,
    max: 5,
  }, 
  deal_ends: {
    type: Sequelize.DATE,
  }, 
  units_sold: {
    type: Sequelize.INTEGER,
  }, 
  shipping_option: {
    type: Sequelize.STRING,
  }, 
  drop_count: {
    type: Sequelize.INTEGER,
  }
});

const Category = sequelize.define('category', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  }
})

  // REDIS
module.exports = {
  Item : Item,
  Category: Category,
}

