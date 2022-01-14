import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { AppError } from '@shared/errors/AppError';
import { prismaClient } from '@shared/prisma';

interface IRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: IRequest) {
    const user = await prismaClient.user.findFirst({
      where: { email },
    });
    if (!user) {
      throw new AppError('Usuário não encontrado', 400);
    }
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('E-mail ou Senha estão inválidos!', 401);
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

export const authUserService = new AuthUserService();
