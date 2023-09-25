import { Router } from 'express';
import { CreateUserController } from '../modules/user/controllers/create/createUserController';
import { AuthUserController } from '../modules/user/controllers/auth/authUserController';
import { ListUserController } from '../modules/user/controllers/list/listUserController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const userRoutes = Router();

userRoutes.post('/users', new CreateUserController().handle);
userRoutes.post('/session', new AuthUserController().handle);
userRoutes.get('/users/me', ensureAuthenticated, new ListUserController().handle);

export { userRoutes };
