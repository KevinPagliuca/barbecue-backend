import { AppError } from '../../../../shared/errors/AppError';
import {
  churrasRepository,
  participantsRepository,
} from '../../../../shared/prisma';
import { IUpdateChurrasDTO } from '../../dtos';

class UpdateChurrasSercice {
  async execute({
    id,
    title,
    date,
    hour,
    location,
    description,
    participants,
    deleted_participants,
    user_id,
  }: IUpdateChurrasDTO) {
    const churras = await churrasRepository.findFirst({
      where: {
        id,
        AND: { user_id },
      },
    });

    if (!churras) {
      throw new AppError('Churras não encontrado', 404);
    }

    const participantsWithId = participants.filter((item) => item.id);
    const participantsWithoutId = participants.filter((item) => !item.id);

    const updatedChurras = await churrasRepository.update({
      where: { id },
      data: {
        title,
        date: new Date(date),
        hour,
        location,
        description,
        participants: {
          updateMany: participantsWithId.map((participante) => ({
            where: { id: participante.id },
            data: {
              name: participante.name,
              value: participante.value,
            },
          })),
          createMany: {
            data: participantsWithoutId,
          },
        },
      },
      include: {
        participants: true,
      },
    });

    if (deleted_participants) {
      await participantsRepository.deleteMany({
        where: {
          id: {
            in: deleted_participants,
          },
        },
      });
    }

    return updatedChurras;
  }
}

export const updateChurrasService = new UpdateChurrasSercice();
