import { Router } from 'express';

// import controllers aplication
import AuthenticateController from '../app/controllers/AuthenticateController';

const routes = new Router();

// listando todas minhas rotas
routes.get('/login', AuthenticateController.login);

export default routes;
