import { Router } from 'express';

import { AuthRoutes } from './auth.routes';
import { ChurrasRoutes } from './churras.routes';

const routes = Router();

routes.use('/api/auth', AuthRoutes);
routes.use('/api/churras', ChurrasRoutes);

export { routes };
