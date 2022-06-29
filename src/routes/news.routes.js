import axios from 'axios';
import { Router } from 'express';

export const router = Router();

router.get('/api/news', async (req, res) => {
    try {
        const keyWord = req.query.q || undefined;
        const url = `https://newsapi.org/v2/everything?q=${keyWord}&apiKey=${process.env.NEWS_API_KEY}`;
        const { data, status } = await axios.get(url);
        return res.status(status).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/api/news/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const keyWord = req.query.q || undefined;
        const url = `https://newsapi.org/v2/everything?q=${keyWord}&apiKey=${process.env.NEWS_API_KEY}`;
        const { data, status } = await axios.get(url);

        const selectedNews = data.articles.find(
            (news) => news.source.id === id
        );
        return res.status(status).json(selectedNews);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});
