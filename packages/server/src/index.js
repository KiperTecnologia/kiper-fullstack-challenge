import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import config from './config';

const app = express();

app.use(morgan('short'));
app.use(helmet());
app.use(express.json());

app.listen(
  config.port,
  () => console.log(`server listening on port ${config.port}`), //eslint-disable-line
);
