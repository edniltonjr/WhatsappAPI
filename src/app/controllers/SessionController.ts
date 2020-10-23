import {Request, Response} from 'express';

class SessionController {
    async login(req: Request, res: Response) {
      res.json('login realizado com sucesso');
    }
  }
  
  export default new SessionController();
  