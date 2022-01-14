import { Request, Response } from 'express';

import { listChurrasByIdService } from './ListChurrasByIdService';

class ListChurrasByIdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const churras = await listChurrasByIdService.execute(id);
    return res.status(200).json(churras);
  }
}

export const listChurrasByIdController = new ListChurrasByIdController();
