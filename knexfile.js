// Update with your config settings.
var DATABASE_URL = 'postgresql://kennisilverio:@ec2-54-147-229-89.compute-1.amazonaws.com/productInfo'


module.exports = {
  production: {
    client: 'pg',
    connection: DATABASE_URL,
    pool: {
      min: 2,
      max: 40
    },
    migrations: {
      directory: __dirname + '/db/migrations'    }
  },
  development: {
    client: 'pg',
    connection: DATABASE_URL,
    pool: {
      min: 2,
      max: 40
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
    directory: __dirname + '/db/seeds/development'
    }
  }
};
