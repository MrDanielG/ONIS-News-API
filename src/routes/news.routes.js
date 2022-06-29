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

router.get('/api/news/:title', async (req, res) => {
    try {
        const title = req.params.title;
        const keyWord = req.query.q || undefined;
        const url = `https://newsapi.org/v2/everything?q=${keyWord}&apiKey=${process.env.NEWS_API_KEY}`;
        const { data, status } = await axios.get(url);

        const selectedNews = data.articles.find((news) => news.title === title);
        return res.status(status).json(selectedNews);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/api/swagger.json', (_, res) => {
    res.send(SwaggerFile);
});
