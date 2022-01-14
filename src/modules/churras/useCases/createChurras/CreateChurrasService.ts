import { churrasRepository } from '../../../../shared/prisma';
import { ICreateChurrasDTO } from '../../dtos';

class CreateChurrasService {
  async execute({
    title,
    date,
    description,
    hour,
    location,
    participants,
    user_id,
  }: ICreateChurrasDTO) {
    const churras = await churrasRepository.create({
      data: {
        title,
        date,
        description,
        hour,
        user_id,
        location,
        participants: !participants
          ? undefined
          : {
              createMany: {
                data: participants,
              },
            },
      },
      include: {
        participants: true,
      },
    });

    return churras;
  }
}

export const createChurrasService = new CreateChurrasService();
