import { IUpdateUserDTO } from '@modules/auth/dtos';
import { AppError } from '@shared/errors/AppError';
import { userRepository } from '@shared/prisma';

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
    });

    delete updatedUser.password;

    return updatedUser;
  }
}

export const updateUserService = new UpdateUserService();
