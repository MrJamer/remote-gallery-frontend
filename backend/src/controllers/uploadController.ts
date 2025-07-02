import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const uploadImage = async (req: Request, res: Response) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

  const { filename, mimetype, path } = req.file;

  const image = await prisma.image.create({
    data: { filename, mimetype, path },
  });

  res.status(201).json(image);
};
