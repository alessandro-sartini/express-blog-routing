


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

// update

router.put('/posts/:id', (req, res) => {
    
    res.send('Modifica integrale del post ' + req.params.id);

})

// modify

router.patch('/posts/:id', (req, res) => {
   
   res.send('modifica parziale del post') 

});

// destroy

router.delete('/posts/:id', (req, res) => {
    
    res.send('Eliminazione del post in questione');

})



