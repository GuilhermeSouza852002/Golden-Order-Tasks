const mysql = require('mysql')

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"852002",
    database:"solaire"
})

module.exports = { db }
