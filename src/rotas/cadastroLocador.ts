import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const rotas = Router();
const prisma = new PrismaClient();

rotas.get('/', async (req: Request, res: Response) => {
    res.end("retorno da tela do cadastro do locador")
});

rotas.post('/', async (req: Request, res: Response) => {
  const { nome, email } = req.body;
  try {
    const usuario = await prisma.usuario.create({
      data: {
        nome,
        email,
      },
    });
    res.json(usuario);
  } catch (erro) {
    res.status(400).send(erro);
  }
});

export default rotas;