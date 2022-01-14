import { Request, Response } from 'express';

import { updateChurrasService } from './UpdateChurrasService';

class UpdateChurrasController {
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      title,
      description,
      date,
      location,
      hour,
      participants,
      deleted_participants,
    } = req.body;
    const { user } = req;

    const churras = await updateChurrasService.execute({
      id: req.params.id,
      title,
      description,
      date,
      location,
      hour,
      participants,
      deleted_participants,
      user_id: user.id,
    });
    return res.status(200).json(churras);
  }
}

export const updateChurrasController = new UpdateChurrasController();
