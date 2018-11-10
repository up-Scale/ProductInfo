// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'productInfo',
      user:     'kennisilverio',
      password: ''
    },
    pool: {
      min: 2,
      max: 100
    },
    migrations: {
      directory: __dirname + '/db/migrations'    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'productInfo',
      user:     'kennisilverio',
      password: ''
    },
    pool: {
      min: 2,
      max: 100
    },
    migrations: {
      directory: __dirname + '/db/migrations'    }
  },
  development: {
    client: 'pg',
    connection: {
      user : 'kennisilverio',
      password : '',
      database : 'productInfo'
    },
    pool: {
      min: 2,
      max: 100
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
    directory: __dirname + '/db/seeds/development'
    }
  }
};
