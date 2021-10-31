const app = require('express')();

app.get('/api/:id', (req, res) => {

    const id = req.params.id;
    const response = 
        {
            "name": "Cryptopunks"+id,
            "description": "A highly acclaimed collection of punks.", 
            "image": "https://www.larvalabs.com/cryptopunks/cryptopunk"+id+".png"
        }
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
    res.end(response);
});

module.exports = app;