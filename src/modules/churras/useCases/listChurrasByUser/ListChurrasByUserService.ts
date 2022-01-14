import { churrasRepository } from '../../../../shared/prisma';

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

    return churras;
  }
}

export const listChurrasByUserService = new ListChurrasByUserService();
