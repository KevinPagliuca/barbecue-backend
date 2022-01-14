import { userRepository } from '@shared/prisma';

class DeleteUserService {
  async execute(id: string) {
    await userRepository.delete({ where: { id } });
  }
}

export const deleteUserService = new DeleteUserService();
