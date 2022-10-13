import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const rotas = Router();
const prisma = new PrismaClient();

rotas.get('/', async (req: Request, res: Response) => {
  const Inquilinos = await prisma.inquilinos.findMany({});
  res.json(Inquilinos);
});

rotas.post('/', async (req: Request, res: Response) => {
  const { nome, email } = req.body;
  try {
    const Inquilinos = await prisma.inquilinos.create({
      data: {
        nome,
        email,
      },
    });
    res.json(Inquilinos);
  } catch (erro) {
    res.status(400).send(erro);
  }
});

export default rotas;