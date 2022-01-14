import { churrasRepository } from '../../../../shared/prisma';

class ListChurrasService {
  async execute() {
    const churras = await churrasRepository.findMany({
      include: {
        participants: true,
        user: true,
      },
    });

    return churras;
  }
}

export const listChurrasService = new ListChurrasService();
