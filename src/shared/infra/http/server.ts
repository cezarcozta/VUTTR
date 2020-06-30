import 'reflect-metadata';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';

import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Back-end started on port 3000');
});
