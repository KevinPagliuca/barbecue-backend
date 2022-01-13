import { Request, Response } from 'express';

import { authUserService } from './AuthUserService';

class AuthUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { password, email } = req.body;

    const { user, token } = await authUserService.execute({
      password,
      email,
    });

    return res.status(201).json({ user, token });
  }
}

export const authUserController = new AuthUserController();
