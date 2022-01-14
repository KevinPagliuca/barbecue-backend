import { Request, Response } from 'express';

import { listChurrasService } from './ListChurrasService';

class ListChurrasController {
  async handle(req: Request, res: Response): Promise<Response> {
    const churras = await listChurrasService.execute();
    return res.status(200).json(churras);
  }
}

export const listChurrasController = new ListChurrasController();
