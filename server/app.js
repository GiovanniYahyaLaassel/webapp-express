const express = require('express');
const cors = require('cors')
const path = require('path'); 
const app = express();
const moviesRoutes = require('./routes/moviesRoutes');
const PORT = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'pubblic')));


// uso il router per rotta movies
app.use('/movies', moviesRoutes)



// avvio il server sulla porta 
app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});