import { Router } from 'express';
import { CreateTaskController } from '../modules/task/controllers/create/createTaskController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { UpdateTaskController } from '../modules/task/controllers/update/updateTaskController';

const taskRoutes = Router();

taskRoutes.use(ensureAuthenticated);

taskRoutes.post('/tasks', new CreateTaskController().handle);
taskRoutes.patch('/tasks/:taskId/completed', new UpdateTaskController().handle);

export { taskRoutes };
