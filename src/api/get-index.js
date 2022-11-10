const { aplication } = require("express")
const express = require("express")

const InquilinoRouter = require('../rotas/Inquilino')
const LocadorRouter = require('../rotas/locador')
const LoginRouter = require('../rotas/login')
const AnuncioRouter = require('./Anuncio')
const UsuarioRouter = require('./Usuario')

const router = express.Router( )

router.get('/', (req, res) => {
  res.send('Alugando online ')
})

router.use('./Inquilino', InquilinoRouter)
router.use('./locador', LocadorRouter)
router.use('./login', LoginRouter)
router.use('./Anuncio', AnuncioRouter)
router.use('./Usuario', UsuarioRouter)



module.exports = router