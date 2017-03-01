const express = require('express');

const app = express();

app.get('/board', (req, res) => {
    res.json({
        lists: [{
            title: 'Example list 1',
            cards: [{
                text: 'Example card 1'
            }, {
                text: 'Example card 2'
            }]
        }, {
            title: 'Example list 2',
            cards: [{
                text: 'Example card 1'
            }, {
                text: 'Example card 2'
            }]
        }]
    });
});

app.listen(8080);
