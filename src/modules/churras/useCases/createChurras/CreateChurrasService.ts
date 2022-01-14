import { ICreateChurrasDTO } from '@modules/churras/dtos';
import { prismaClient } from '@shared/prisma';

class CreateChurrasService {
  async execute({
    title,
    date,
    description,
    hour,
    location,
    participants,
  }: ICreateChurrasDTO) {
    const churras = await prismaClient.churras.create({
      data: {
        title,
        date,
        description,
        hour,
        location,
        Participants: {
          createMany: {
            data: participants,
          },
        },
      },
      include: {
        Participants: true,
      },
    });

    return churras;
  }
}

export const createChurrasService = new CreateChurrasService();
