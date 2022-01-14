import { Request, Response } from 'express';

import { updateUserService } from './UpdateUserService';

class UpdateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, birthday } = req.body;
    const { user } = req;

    const userUpdated = await updateUserService.execute({
      id: user.id,
      name,
      email,
      birthday,
    });

    return res.status(200).json(userUpdated);
  }
}

export const updateUserController = new UpdateUserController();
