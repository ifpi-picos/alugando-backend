const express = require('express')
const router = express.Router( )

router.get('/', (req, res)=> {
    res.send('Usuario adicionado com sucesso! ')
})

module.exports = router