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


// Funzione per ottenere ogni singolo film con le sue recensioni 

const show = (req, res) => {
    // ottengo l'id del film dalla richiesta 
    const movieId = parseInt(req.params.id);
    
    // eseguo la query per ottenere
    connection.query('SELECT * FROM movies WHERE id = ?', [movieId],  (err, movieResult) => {
        if(err) {
            console.error('Errore nella query', err);
            return res.status(500).send('Errore nel recupero dei film');
        }

        if (movieResult.length === 0) {
            return res.status(404).send('Film non trovato');
        }

         // eseguo una query per ottenere le recensioni a quel film
         connection.query('SELECT * FROM reviews WHERE movie_id = ?', [movieId], (err, reviewsResult) => {
            if (err) {
                console.error('Errore nella query delle recensioni:', err);
                return res.status(500).send('Errore nel recupero delle recensioni');
            }

             // film e recensioni in formato JSON
             res.status(200).json({
                movie: movieResult[0],
                reviews: reviewsResult  
            });
            
        });
    });
};

module.exports = {
    index,
    show
};

