import express from 'express';
import errorHandler from './middleware/errorHandler';
import logger from './middleware/logger';
import parsers from './middleware/parsers';
import { apiRouter } from './api';

const app = express();

app.use(logger);

app.use(parsers);
app.use('/api', apiRouter);
app.use(errorHandler);

export { app };
