var config = require('config');

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: config.get('database.name'),
      user:     config.get('database.user'),
      password: config.get('database.pass')
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: config.get('database.name'),
      user:     config.get('database.user'),
      password: config.get('database.pass')
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: config.get('database.name'),
      user:     config.get('database.user'),
      password: config.get('database.pass')
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
