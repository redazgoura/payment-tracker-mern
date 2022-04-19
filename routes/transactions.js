const express = require('express')
const router = express.Router();
const { getTransactions, addTransactions, deleteTransactions, up } = require('../controllers/transactionController')

router
    .route('/')
    .get(getTransactions)
    .post(addTransactions);

router
    .route('/:id')
    .delete(deleteTransactions); 

module.exports = router ;