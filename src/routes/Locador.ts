import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const rotas = Router();
const prisma = new PrismaClient();

rotas.get('/', async (req: Request, res: Response) => {
  const usuarios = await prisma.usuario.findMany({});
  res.json(usuarios);
});

rotas.post('/', async (req: Request, res: Response) => {
  const { nome, email} = req.body;
  try {
    const locador = await prisma.locador.create({
      data: {
        nome,
        email,
      },
    });
    res.json(locador);
  } catch (erro) {
    res.status(400).send(erro);
  }
});

export default rotas;