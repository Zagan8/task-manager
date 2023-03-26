import { Response, Request } from 'express';
import accountService from '../services/accout.service';
import taskService from '../services/task.service';

async function getAllTasksByAccountId(req: Request, res: Response) {
  try {
    const account = await taskService.findTasksByAccountId(
      req.params.accountId
    );
    res.send(account);
  } catch (e) {
    console.error(e);
  }
}

async function createTask(req: Request, res: Response) {
  try {
    console.log(req.body);
    const newTask = await taskService.createTask(req.body.task);
    res.send(newTask);
  } catch (e) {
    res.send(400);
    console.error(e);
  }
}

export { getAllTasksByAccountId, createTask };
