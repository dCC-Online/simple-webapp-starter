const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendA('Hi there dcc class');
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});
