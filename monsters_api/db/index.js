const { Pool } = require('pg');

const pool = new Pool({
    user: 'node_user',
    host: 'localhost',
    database: 'monstersdb',
    password: 'node_password',
    port: 5432
})

pool.query('SELECT * FROM monsters', (err, res) => {
    if(err) return console.log(err);

    console.log(res);
})