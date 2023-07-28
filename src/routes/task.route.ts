import { Router } from 'express';
import { CreateTaskController } from '../modules/task/controllers/create/createTaskController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const taskRoutes = Router();

taskRoutes.use(ensureAuthenticated);

taskRoutes.post('/tasks', new CreateTaskController().handle);

export { taskRoutes };
