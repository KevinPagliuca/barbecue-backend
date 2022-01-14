import { AppError } from '@shared/errors/AppError';
import { churrasRepository } from '@shared/prisma';

class DeleteChurrasService {
  async execute(id: string) {
    const churras = await churrasRepository.findFirst({
      where: {
        id,
      },
    });

    if (!churras) {
      throw new AppError('Churras não encontrado', 404);
    }

    await churrasRepository.delete({
      where: { id: churras.id },
    });
  }
}

export const deleteChurrasService = new DeleteChurrasService();
