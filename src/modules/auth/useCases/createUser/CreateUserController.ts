import { Request, Response } from 'express';

import { createUserService } from './CreateUserService';

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, birthday, password } = req.body;

    const { token, user } = await createUserService.execute({
      name,
      email,
      birthday,
      password,
    });

    return res.status(201).json({ user, token });
  }
}

export const createUserController = new CreateUserController();
