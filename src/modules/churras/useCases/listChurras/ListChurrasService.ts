import { churrasRepository } from '../../../../shared/prisma';

class ListChurrasService {
  async execute() {
    const churras = await churrasRepository.findMany({
      include: {
        participants: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return churras;
  }
}

export const listChurrasService = new ListChurrasService();
