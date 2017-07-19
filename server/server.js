const express = require('express');
const cors = require('cors');
const {CLIENT_ORIGIN} = require('./config');

const app = express();

app.use(
    cors({
        origin: CLIENT_ORIGIN
    })
);

app.get('/api/board', (req, res) => {
    res.json({
        lists: [
            {
                title: 'Example list 1',
                cards: [
                    {
                        text: 'Example card 1'
                    },
                    {
                        text: 'Example card 2'
                    }
                ]
            },
            {
                title: 'Example list 2',
                cards: [
                    {
                        text: 'Example card 1'
                    },
                    {
                        text: 'Example card 2'
                    }
                ]
            }
        ]
    });
});

app.listen(8080);
