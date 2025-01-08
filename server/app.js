const express = require('express');
const app = express();
const moviesRoutes = require('./routes/moviesRoutes');
const PORT = 3000;


// uso il router per rotta movies
app.use('/movies', moviesRoutes)


// avvio il server sulla porta 
app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});