import { Router, Request, Response } from 'express';
import rotasDeUsuarios from './usuarios';
import rotasDeLogin from './login';

const rotas = Router(); 

rotas.get('/', (req: Request, res: Response) => {
  res.send('Ola!');
});

rotas.use('/usuarios', rotasDeUsuarios);
rotas.use('/login', rotasDeLogin);

export default rotas;