import { Request, Response } from 'express';

import { changePasswordService } from './ChangePasswordService';

class ChangePasswordController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { password, password_confirmation } = req.body;
    const { user } = req;

    await changePasswordService.execute({
      id: user.id,
      password,
      password_confirmation,
    });

    return res.status(200).json({ message: 'Senha alterada com sucesso' });
  }
}

export const changePasswordController = new ChangePasswordController();
