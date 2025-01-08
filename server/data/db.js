const mysql = require('mysql2');


// creo la connessione al database 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '131016',
    database: 'movies_db'
});

// verfico che la connesione sia avvenuta 
connection.connect((err) => {
    if(err){
        console.error('Errore nella connessione del database', err)
    } else {
        console.log('connesso al database MYSQL');
    }
});

module.exports = connection 