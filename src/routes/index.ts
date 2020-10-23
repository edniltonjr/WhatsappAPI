import { Router } from 'express';
import sessionRouter from './sessions.routes';
import venomService from '../services/VenomService'

const routes = Router();

routes.use('/v0', sessionRouter);

routes.get('/venom', venomService)

export default routes;
