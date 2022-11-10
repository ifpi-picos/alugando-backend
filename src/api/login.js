const express = require('express')
const router = express.Router( )

router.get('/', (req, res) => {
    res.send('Login feito com sucesso! ')
})

module.exports = router