import { Router } from 'express';
import { userRoutes } from './user.routes';
import { taskRoutes } from './task.routes';

const routes = Router();

routes.use(userRoutes);
routes.use(taskRoutes);

export { routes };
