require('dotenv').config({path: './.env'});

module.exports = {

    development: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        debug: true,
        migrations: {
            directory: __dirname + '/knex/migrations'
        }
    },

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/knex/migrations'
        }
    }

};
