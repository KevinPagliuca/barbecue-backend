import { AppError } from '../../../../shared/errors/AppError';
import { userRepository } from '../../../../shared/prisma';
import { IUpdateUserDTO } from '../../dtos';

class UpdateUserService {
  async execute({ id, name, email, birthday }: IUpdateUserDTO) {
    const user = await userRepository.findFirst({ where: { id } });

    if (!user) {
      throw new AppError('Usuário não encontrado', 404);
    }

    const updatedUser = await userRepository.update({
      where: { id },
      data: {
        name,
        email,
        birthday: birthday ? new Date(birthday) : user.birthday,
      },
      select: {
        id: true,
        name: true,
        email: true,
        birthday: true,
        created_at: true,
        updated_at: true,
      },
    });

    return updatedUser;
  }
}

export const updateUserService = new UpdateUserService();
