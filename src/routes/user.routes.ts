import { Router } from 'express';
import { CreateUserController } from '../modules/user/controllers/create/createUserController';


const userRoutes = Router();

userRoutes.post('/users', new CreateUserController().handle);

export { userRoutes };
