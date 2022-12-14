import express from 'express';
import rotas from './rotas/Index';

// criação de uma instância do express/servidor http
const app = express();

app.use(express.json());

// middleware de tratamento de todas as rotas
app.use('/', rotas);

// inicia o servidor http na porta 3000
app.listen(3000);