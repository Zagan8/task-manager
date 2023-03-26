import express from 'express';
import { getAccountById } from '../controllers/account.controller';
const accountRouter = express.Router();
const routePrefix = '/account';
accountRouter.get(`${routePrefix}/:id`, getAccountById);

export default accountRouter;
