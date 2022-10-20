import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const rotas = Router();
const prisma = new PrismaClient();

rotas.post('/', async (req: Request, res: Response) => {
  const { nome,email } = req.body;
  try {
    const anuncios = await prisma.anuncios.create({
      data: {
        nome,
        email,
      },
    });
    res.json(anuncios);
  } catch (erro) {
    res.status(400).send(erro);
  }
});

export default rotas;