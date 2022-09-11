
const express = require('express')
const app = express()
const port = 8000

app.get('/' , (req , res){
    res.send('hello word Express')
})
app.listen(port , (8000)=>{
    console.log('servidor iniciado com sucesso')
})