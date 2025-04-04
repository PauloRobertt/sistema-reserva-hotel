import express from 'express';
import router from './app/routers/router.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());

app.use(express.json());

app.use(cors({
    credentials: true
}));

app.use(router);

export default app;
