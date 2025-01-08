//importo la connesione dal database
const connection = require('../data/db'); 

// funzione per ottenre la lista di tutti i film 

const index = (req, res) => {
    // eseguo la query per ottenere tutti i film 
    connection.query('SELECT * FROM movies', (err, results) => {
        if(err) {
            console.error('Errore nella query', err);
            return res.status(500).send('Errore nel recupero dei film');
        }
        
        if(results.length === 0) {
            return res.status(404).send('Nessun film trovato.');
        }

        res.status(200).json(results);
    });
};

module.exports = {
    index
};