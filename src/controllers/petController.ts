import { Request, Response } from 'express';
import prisma from '../prisma';

export const createPet = async (req: Request, res: Response) => {
  const { name, description, location, contact } = req.body;

  try {
    const pet = await prisma.pet.create({
      data: {
        description,
        location,
        contact
      }
    });
    res.status(201).json(pet);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar o pet.' });
  }
};
