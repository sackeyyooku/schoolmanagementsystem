const mysql = require('mysql')
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_NAME,
    user: process.env.DB_USER
})

connection.connect();

// function getSession(){
//     return connectio
// }


module.exports = connection;
