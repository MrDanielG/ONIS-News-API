import { Router } from 'express';

export const router = Router();

router.get('/api/news', (req, res) => {
    res.json({ message: 'Route: /api/news' });
});
