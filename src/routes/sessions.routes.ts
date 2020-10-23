import { Router, Request, Response } from 'express';

import SessionController from '../app/controllers/SessionController';
import UserController from '../app/controllers/UserController';

const sessionsRouter = Router();

sessionsRouter.get('/auth', SessionController.login);

sessionsRouter.get('/users', UserController.index);

export default sessionsRouter;
