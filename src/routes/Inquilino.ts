import { Router, Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const rotas = Router();
const prisma = new PrismaClient();

rotas.get('/', async (req: Request, res: Response) => {
  const inquilino = await prisma.inquilino.findMany({});
  res.json(inquilino);
});

rotas.post('/', async (req: Request, res: Response) => {
  const { nome, email} = req.body;
  try {
    const inquilino = await prisma.inquilino.create({
      data: {
       nome,
       email,

    
      },
      
    });
    res.json(inquilino);
  } catch (erro) {
    res.status(400).send(erro);
  }
});

export default rotas;