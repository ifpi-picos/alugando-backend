const express = require('express')
const router = express.Router( )

const cadastroInquilino = []

router.get('/Inquilino', (req, res) =>{
    const dadosInquilino = req.body
    console.log(dadosInquilino)
    cadastroInquilino.push(dadosInquilino)
    res.send('cadastro realizado com sucesso!')
})

module.exports = router