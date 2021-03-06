/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../../../errors/AppError';
import { userRepository } from '../../../prisma';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token não informado', 401);
  }

  const [, token] = authHeader.split(' ');
  try {
    const { sub: user_id } = verify(
      token,
      '8e4103323c9108df5ac44091ec21959d'
    ) as IPayload;

    const user = await userRepository.findFirst({
      where: { id: user_id },
      select: {
        id: true,
        name: true,
        email: true,
        birthday: true,
        created_at: true,
        updated_at: true,
      },
    });

    if (!user) throw new AppError('Usuário não existe!', 404);
    req.user = user;
    next();
  } catch {
    throw new AppError('Token inválido!', 401);
  }
}
