import { Request, Response } from 'express';

import { deleteChurrasService } from './DeleteChurrasService';

class DeleteChurrasController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await deleteChurrasService.execute(id);
    return res.status(200).json({ message: 'Churras deletado com sucesso' });
  }
}

export const deleteChurrasController = new DeleteChurrasController();
