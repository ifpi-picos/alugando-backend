const express = require("express")

const app = express ( )

app.use(express.json( ))

app.get('/', (req, res) => {
    res.send('alugando online')
})
app.get('./Inquilino', (req, res) => {
    res.send('Cadastro do Inquilino')
})
app.post('./Inquilino', (req, res) =>{
    const dadosInquilino = req.body
    console.log(dadosInquilino)
    res.send('Cadastro realizado com sucesso! ')
})
app.get('./Locador', (req, res) => {
    res.send('Cadastro do Locador')
})
app.get('./login', (req, res) => {
    res.send('Login')
})
app.get('./Usuario', (req, res) => {
    res.send('Usuario')
})
app.get('./Anuncio', (req, res) => {
    res.send("Anuncio")
})

app.listen(3000, () =>{
    console.log('Alugando online')
})