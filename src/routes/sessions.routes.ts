import { Router, Request, Response } from 'express';

import { getCustomRepository } from 'typeorm';

import UsersRepository from '../repositories/UsersRepository';

import AuthenticateController from '../app/controllers/SessionController';

const sessionsRouter = Router();

sessionsRouter.get('/auth', AuthenticateController.login);

sessionsRouter.get('/userss', async (request: Request, response: Response) => {
  const usersRepository = getCustomRepository(UsersRepository);
  const users = await usersRepository.find();
  return response.json(users);
});

export default sessionsRouter;
