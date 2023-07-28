import { Router } from 'express';
import { userRoutes } from './user.route';
import { taskRoutes } from './task.route';

const routes = Router();

routes.use(userRoutes);
routes.use(taskRoutes);

export { routes };
