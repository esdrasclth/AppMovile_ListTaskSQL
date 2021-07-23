import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import tasksRouter from './routes/tasks'

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(tasksRouter);

export default app;