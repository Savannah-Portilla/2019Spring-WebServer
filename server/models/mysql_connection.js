//sets up pool-global connection
const mysql = require('mysql');
              require('dotenv').load();  //.load = call right from that package//loads dotenv vars into env variables

const conn = mysql.createPool({  //returns a pool of connections//
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 1,
    insecureAuth: true
});

module.exports = conn; //returnnig the pool object//