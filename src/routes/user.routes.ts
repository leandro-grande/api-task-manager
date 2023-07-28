import { Router } from 'express';
import { CreateUserController } from '../modules/user/controllers/create/createUserController';
import { AuthUserController } from '../modules/user/controllers/auth/authUserController';

const userRoutes = Router();

userRoutes.post('/users', new CreateUserController().handle);
userRoutes.post('/session', new AuthUserController().handle);

export { userRoutes };
