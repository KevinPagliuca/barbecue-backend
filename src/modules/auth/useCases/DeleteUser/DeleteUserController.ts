import { Request, Response } from 'express';

import { deleteUserService } from './DeleteUserService';

class DeleteUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { user } = req;

    await deleteUserService.execute(user.id);

    return res.status(200).json({ message: 'Usuário deletado com sucesso' });
  }
}

export const deleteUserController = new DeleteUserController();
