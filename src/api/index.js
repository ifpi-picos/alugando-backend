//arquivo de entrada

const { application } = require("express")
const express = require ("express")


const cursoRouter = require('./curso')
const estudanteRouter = require('./estudante')


const router = express.Router( )

router.get('/', (req, res) => {
    res.send('Alugando online')
})

//fazer a chamada das rotas
// qnd for qualquer rota de / curso, vai p rota curso
// qnd for qualquer rota de / estudante , vai p rota estudante
router.use('./', cursoRouter)
router.use('./estudante', estudanteRouter)


module.exports = router