import { Router } from 'express';

import { listChurrasByUserController } from '@modules/churras/useCases/listChurrasByUser/ListChurrasByUserController';

import { createChurrasController } from '../../../../modules/churras/useCases/createChurras/CreateChurrasController';
import { deleteChurrasController } from '../../../../modules/churras/useCases/deleteChurras/DeleteChurrasController';
import { listChurrasController } from '../../../../modules/churras/useCases/listChurras/ListChurrasController';
import { listChurrasByIdController } from '../../../../modules/churras/useCases/listChurrasById/ListChurrasByIdController';
import { updateChurrasController } from '../../../../modules/churras/useCases/updateChurras/UpdateChurrasController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';

const ChurrasRoutes = Router();

ChurrasRoutes.post('/', ensureAuthenticated, createChurrasController.handle);
ChurrasRoutes.get('/', ensureAuthenticated, listChurrasController.handle);
ChurrasRoutes.put('/:id', ensureAuthenticated, updateChurrasController.handle);
ChurrasRoutes.get(
  '/user',
  ensureAuthenticated,
  listChurrasByUserController.handle
);

ChurrasRoutes.get(
  '/:id',
  ensureAuthenticated,
  listChurrasByIdController.handle
);
ChurrasRoutes.delete(
  '/:id',
  ensureAuthenticated,
  deleteChurrasController.handle
);

export { ChurrasRoutes };
