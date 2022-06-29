import axios from 'axios';
import { Router } from 'express';

export const router = Router();

router.get('/api/news', async (req, res) => {
    try {
        const keyWord = req.query.q || undefined;
        console.log(keyWord);
        const { data, status } = await axios.get(
            `https://newsapi.org/v2/everything?q=${keyWord}&apiKey=${process.env.NEWS_API_KEY}`
        );

        return res.status(status).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
