import { Router } from 'express';

const callbackRouter = Router();

callbackRouter.get('/', (req, res) => {
  console.log(req.body);

  res.json({ response: 'cool' });
});

export { callbackRouter };
