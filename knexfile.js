// Update with your config settings.

module.exports = {

  staging: {
    client: 'pg',
    connection: {
      database: 'productInfo',
      user:     'kennisilverio',
      password: ''
    },
    pool: {
      min: 2,
      max: 150
    },
    migrations: {
      directory: __dirname + '/db/migrations'    }
  },

  production: {
    client: 'pg',
    connection: {
      database: 'productInfo',
      user:     'kennisilverio',
      password: ''
    },
    pool: {
      min: 2,
      max: 150
    },
    migrations: {
      directory: __dirname + '/db/migrations'    }
  },
  development: {
    debug: true,
    client: 'pg',
    connection: {
      user : 'kennisilverio',
      password : '',
      database : 'productInfo'
    },
    pool: {
      min: 2,
      max: 150
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
    directory: __dirname + '/db/seeds/development'
    }
  }
};
