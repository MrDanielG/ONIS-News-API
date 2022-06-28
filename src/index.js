const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;
const HOST = 'http://localhost';

app.get('/', (req, res) => {
    res.json({ message: 'Hello world! ONIS-News-API is alive!' });
});

app.listen(PORT, () => {
    console.log(`ONIS-News-API listening on ${HOST}:${PORT}`);
});
