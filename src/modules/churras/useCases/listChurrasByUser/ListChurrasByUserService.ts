import { AppError } from '@shared/errors/AppError';
import { churrasRepository } from '@shared/prisma';

class ListChurrasByUserService {
  async execute(user_id: string) {
    const churras = await churrasRepository.findMany({
      where: {
        user_id,
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

export const listChurrasByUserService = new ListChurrasByUserService();
