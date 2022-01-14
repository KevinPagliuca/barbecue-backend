import { Router } from 'express';

import { authUserController } from '@modules/auth/useCases/AuthUser/AuthUserController';
import { changePasswordController } from '@modules/auth/useCases/ChangePassword/ChangePasswordController';
import { createUserController } from '@modules/auth/useCases/CreateUser/CreateUserController';
import { deleteUserController } from '@modules/auth/useCases/DeleteUser/DeleteUserController';
import { updateUserController } from '@modules/auth/useCases/UpdateUser/UpdateUserController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticate';

const AuthRoutes = Router();

AuthRoutes.post('/register', createUserController.handle);
AuthRoutes.post('/', authUserController.handle);

AuthRoutes.get('/me', ensureAuthenticated, (req, res) => {
  return res.status(200).json(req.user);
});

AuthRoutes.put('/me', ensureAuthenticated, updateUserController.handle);
AuthRoutes.delete('/me', ensureAuthenticated, deleteUserController.handle);

AuthRoutes.put(
  '/me/password',
  ensureAuthenticated,
  changePasswordController.handle
);

export { AuthRoutes };
