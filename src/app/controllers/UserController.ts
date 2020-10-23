import {Request, Response} from 'express';

import { getCustomRepository } from 'typeorm';

import UsersRepository from '../../repositories/UsersRepository';

class UserController {
  async index(req: Request, res: Response) {
    const usersRepository = getCustomRepository(UsersRepository);
    const users = await usersRepository.find();
    return res.json(users);
  }
}

export default new UserController();
