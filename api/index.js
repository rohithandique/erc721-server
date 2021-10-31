module.exports = (request, response) => {

    const id = request.query.id;
    
    response.json({"name": "Cryptopunks"+id,
    "description": "A highly acclaimed collection of punks.", 
    "image": "https://www.larvalabs.com/cryptopunks/cryptopunk"+id+".png"});
};