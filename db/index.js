var db = require('mysql');
//var pass = require('../config.js');

const connection = db.createConnection({
  host: 'fec-product-info.clj3efkrub7r.us-east-2.rds.amazonaws.com',
  user: 'johnsangiolo',
  password: 'Seniorphase014',
  database: 'product_info'
});

module.exports.connection = connection;