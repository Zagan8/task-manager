import { Response, Request } from 'express';
import accountService from '../services/accout.service';
import taskService from '../services/task.service';

async function getAccountById(req: Request, res: Response) {
  try {
    const account = await accountService.findOneById(req.params.id);
    res.send(account);
  } catch (e) {
    console.error(e);
  }
}

export { getAccountById };
