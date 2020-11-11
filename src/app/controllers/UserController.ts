import {Request, Response} from 'express';

import { getCustomRepository } from 'typeorm';

import UsersRepository from '../../repositories/UsersRepository';

class UserController {
  async index(req: Request, res: Response) {
    const usersRepository = getCustomRepository(UsersRepository);
    const users = await usersRepository.findUsers();
    return res.json(users);
  }

  async show(req: Request, res: Response) {
    const id = req.params.id;
    return res.json({});
  }
}

export default new UserController();
