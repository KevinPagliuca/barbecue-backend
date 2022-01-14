import { AppError } from '@shared/errors/AppError';
import { churrasRepository } from '@shared/prisma';

class ListChurrasByIdService {
  async execute(id: string) {
    const churras = await churrasRepository.findFirst({
      where: {
        id,
      },
      include: {
        participants: true,
      },
    });

    if (!churras) {
      throw new AppError('Churras não encontrado', 404);
    }

    return churras;
  }
}

export const listChurrasByIdService = new ListChurrasByIdService();
