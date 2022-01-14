import { Request, Response } from 'express';

import { createChurrasService } from './CreateChurrasService';

class CreateChurrasController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { title, date, description, hour, location, participants } = req.body;
    const churras = await createChurrasService.execute({
      title,
      date: new Date(date),
      description,
      hour,
      location,
      participants,
    });

    return res.status(201).json(churras);
  }
}

export const createChurrasController = new CreateChurrasController();
