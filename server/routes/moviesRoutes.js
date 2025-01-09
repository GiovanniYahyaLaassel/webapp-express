const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

// Rotta per ottenere la lista di tutti i film
router.get('/', moviesController.index);

// Rotta per avere i dettagli di un singolo film con le recensioni
router.get('/:id', moviesController.show);


module.exports = router