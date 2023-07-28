import { TaskRepository } from '../repositories/taskRepository';
import { CreateTaskUseCase } from '../useCases/create/createTaskUseCase';



export function makeCreateTaskUseCase() {

	const taskRepository = new TaskRepository;
	const createTaskUseCase = new CreateTaskUseCase(taskRepository);

	return createTaskUseCase;
}
