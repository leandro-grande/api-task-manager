import { Router } from 'express';
import { CreateTaskController } from '../modules/task/controllers/create/createTaskController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { UpdateTaskController } from '../modules/task/controllers/update/updateTaskController';
import { ListTaskController } from '../modules/task/controllers/list/listTaskController';
import { DeleteTaskController } from '../modules/task/controllers/delete/deleteTaskController';

const taskRoutes = Router();

taskRoutes.use(ensureAuthenticated);

taskRoutes.get('/tasks', new ListTaskController().handle);
taskRoutes.post('/tasks', new CreateTaskController().handle);
taskRoutes.patch('/tasks/:taskId/completed', new UpdateTaskController().handle);
taskRoutes.delete('/tasks/:taskId', new DeleteTaskController().handle);

export { taskRoutes };
