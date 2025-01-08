const express = require('express');
const app = express();
const PORT = 3000;

// middleware per rispondere con un messaggio di benvenuto 
app.get('/', (req, res) => {
    res.send('Benvenuto');

})

// avvio il server sulla porta 
app.listen(PORT, () => {
    console.log(`Server in esecuzione su http://localhost:${PORT}`);
});