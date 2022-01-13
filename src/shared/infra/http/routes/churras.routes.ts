import { Router } from 'express';

import { createChurrasController } from '@modules/churras/useCases/createChurras/CreateChurrasController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';

const ChurrasRoutes = Router();

ChurrasRoutes.post('/', ensureAuthenticated, createChurrasController.handle);

export { ChurrasRoutes };
