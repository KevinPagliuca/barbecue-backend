import { hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { AppError } from '../../../../shared/errors/AppError';
import { userRepository } from '../../../../shared/prisma';
import { ICreateUserDTO } from '../../dtos';

class CreateUserService {
  async execute({ email, password, name, birthday }: ICreateUserDTO) {
    const userAlreadyExists = await userRepository.findFirst({
      where: { email },
    });

    if (userAlreadyExists) {
      throw new AppError('O e-mail já está sendo utilizado!', 400);
    }
    const passwordHash = await hash(password, 8);

    const user = await userRepository.create({
      data: {
        email,
        password: passwordHash,
        name,
        birthday: new Date(birthday),
      },
    });

    if (!user) {
      throw new AppError(
        'Ocorreu um erro ao tentar cadastrar-se, tente novamente!',
        400
      );
    }
    const token = sign({}, '8e4103323c9108df5ac44091ec21959d', {
      subject: user.id,
      expiresIn: '1d',
    });

    delete user.password;

    return {
      user,
      token,
    };
  }
}

export const createUserService = new CreateUserService();
