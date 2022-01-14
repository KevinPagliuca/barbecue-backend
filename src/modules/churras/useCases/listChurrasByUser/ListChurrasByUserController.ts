import { Request, Response } from 'express';

import { listChurrasByUserService } from './ListChurrasByUserService';

class ListChurrasByUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { user } = req;
    const churras = await listChurrasByUserService.execute(user.id);
    return res.status(200).json(churras);
  }
}

export const listChurrasByUserController = new ListChurrasByUserController();
