import { Router } from 'express';

export const router = Router();

router.get('/api/news', (req, res) => {
    res.json({
        message: 'Route: /api/news',
        key: `process.env.API_KEY ${process.env.NEWS_API_KEY}`,
    });
});
