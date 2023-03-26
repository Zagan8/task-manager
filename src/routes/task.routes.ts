import express from 'express';
import {
  createTask,
  getAllTasksByAccountId,
} from '../controllers/task.controller';
const taskRouter = express.Router();
const routePrefix = '/tasks';
taskRouter.get(`${routePrefix}/:accountId`, getAllTasksByAccountId);
taskRouter.post(`${routePrefix}`, createTask);

export default taskRouter;
