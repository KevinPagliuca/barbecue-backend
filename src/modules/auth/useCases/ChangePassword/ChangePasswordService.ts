import { hash } from 'bcryptjs';

import { AppError } from '../../../../shared/errors/AppError';
import { userRepository } from '../../../../shared/prisma';
import { IChangePasswordDTO } from '../../dtos';

class ChangePasswordService {
  async execute({ id, password, password_confirmation }: IChangePasswordDTO) {
    if (password_confirmation !== password) {
      throw new AppError('Senhas não conferem', 401);
    }

    const hashPassword = await hash(password, 8);

    await userRepository.update({
      where: { id },
      data: { password: hashPassword },
    });
  }
}

export const changePasswordService = new ChangePasswordService();
