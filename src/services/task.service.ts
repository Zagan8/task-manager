import TaskModel from '../models/task.model';

const taskService = {
  findTasksByAccountId: async (accountId: string) => {
    const tasks = await TaskModel.find({ accountId: accountId });
    return tasks;
  },
  createTask: async (task) => {
    const newTask = await TaskModel.create([task]);
    return newTask;
  },
};

export default taskService;
