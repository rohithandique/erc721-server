const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/:id", (req, res) => {

    const id = req.params["id"].substring(1,);

    const response = 
        {"name": "Cryptopunks"+id,
         "description": "A highly acclaimed collection of punks.", 
         "image": "https://www.larvalabs.com/cryptopunks/cryptopunk"+id+".png"}

    res.send(response);

})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});