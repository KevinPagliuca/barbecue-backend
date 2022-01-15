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
    suggest_drink_value,
    suggest_value,
  }: ICreateChurrasDTO) {
    const churras = await churrasRepository.create({
      data: {
        title,
        date,
        description,
        hour,
        user_id,
        location,
        suggest_value: Number(suggest_value),
        suggest_drink_value: Number(suggest_drink_value),
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

    console.log(churras);

    return churras;
  }
}

export const createChurrasService = new CreateChurrasService();
