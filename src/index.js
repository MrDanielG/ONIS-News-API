import 'dotenv/config';
import express from 'express';
import { router as newsRoutes } from './routes/news.routes.js';

const app = express();
const PORT = process.env.PORT || 8080;
const HOST = 'http://localhost';

app.use('/', newsRoutes);

app.get('/', (_, res) => {
    res.json({
        message: 'Hello world! ONIS-News-API is alive!',
        key: `process.env.API_KEY ${process.env.API_KEY}`,
    });
});

app.listen(PORT, () => {
    console.log(`ONIS-News-API listening on ${HOST}:${PORT}`);
});
