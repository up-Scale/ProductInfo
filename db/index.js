var db = require('mysql');
var pass = require('../config.js');

db.createConnection({
  user: 'root',
  password: pass.password,
  database: 'product_info'
});

module.exports.db = db;