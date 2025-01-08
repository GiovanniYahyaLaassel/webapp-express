const express = require('express');
const app = express();
const connection = require('./data/db');
const PORT = 3000;


// middleware per rispondere con un messaggio di benvenuto 
app.get('/', (req, res) => {

    connection.query('SELECT * FROM movies', (err, results) => {

        if(err){
            console.error('Errore nella query:', err);
            return res.status(500).send('Errore nel recupero dei dati');
        } 
        
        res.status(200).json(results);
    });


});

// avvio il server sulla porta 
app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});