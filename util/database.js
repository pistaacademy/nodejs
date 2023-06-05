const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    'database': 'node_complete',
    password: 'Sepide777'
});


module.exports = pool.promise();