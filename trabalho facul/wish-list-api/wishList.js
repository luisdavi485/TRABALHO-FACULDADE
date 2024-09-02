const express = require('express');
const router = express.Router();

let wishListItems = [];

// Inserir item na lista
router.post('/item', (req, res) => {
    const item = req.body.item;
    if(item) {
        wishListItems.push(item);
        res.status(201).send({ message: 'Item adicionado à lista de desejos', item });
    } else {
        res.status(400).send({ message: 'Item não fornecido' });
    }
});

// Remover item da lista
router.delete('/item', (req, res) => {
    const item = req.body.item;
    const index = wishListItems.indexOf(item);
    if(index !== -1) {
        wishListItems.splice(index, 1);
        res.send({ message: 'Item removido da lista de desejos', item });
    } else {
        res.status(404).send({ message: 'Item não encontrado' });
    }
});

// Mostrar itens da lista
router.get('/', (req, res) => {
    res.send({ items: wishListItems });
});

module.exports = router;
