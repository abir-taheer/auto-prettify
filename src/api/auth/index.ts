import { Router } from 'express';
import { callbackRouter } from './callback';

const authRouter = Router();

authRouter.use('/callback', callbackRouter);

export { authRouter };
