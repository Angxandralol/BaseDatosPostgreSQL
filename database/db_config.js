const { Pool } = require('pg');
const config = 
{
    user: 'postgres',
    host: 'localhost',
    database: 'cliente',
    password: '230301',
    port: 5432,
};

const pool = new Pool(config);
module.exports = pool;