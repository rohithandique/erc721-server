module.exports = (req, res) => {

    const id = req.query.id;
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    res.json({"name": "Cryptopunks"+id,
    "description": "A highly acclaimed collection of punks.", 
    "image": "https://www.larvalabs.com/cryptopunks/cryptopunk"+id+".png"});
};