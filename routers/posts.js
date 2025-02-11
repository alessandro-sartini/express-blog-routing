const express = require('express');
const router = express.Router();

// index
router.get('/', (req, res) => {
    
    res.send('Lista di tutti i post!');

});

// show
router.get('/:id', (req, res) => {
    
    res.send(`post selezionato n: ${req.params.id}`)

});

// store

router.post('/', (res, req) => {
    
    res.send(`Creazione nuovo post`);

});



