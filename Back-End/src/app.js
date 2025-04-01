import express from 'express';
import router from './app/routers/router.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(router);

export default app;
