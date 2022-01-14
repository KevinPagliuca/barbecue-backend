import { Router } from 'express';

import { authUserController } from '@modules/auth/useCases/AuthUser/AuthUserController';
import { createUserController } from '@modules/auth/useCases/createUser/CreateUserController';

const AuthRoutes = Router();

AuthRoutes.post('/register', createUserController.handle);
AuthRoutes.post('/', authUserController.handle);

export { AuthRoutes };
