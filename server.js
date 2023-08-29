const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
let num = 99

app.get("/", (req, res) => {
    res.send(`<p>99 Bottles of beer on the wall</p> <a href="/${num - 1}"}}> take one down , pass it around </a>`)

})

app.get("/:number_of_bottles", (req, res) => {
    if (req.params.number_of_bottles >= 1) {
        res.send(`${parseInt(req.params.number_of_bottles)} bottles of beer on the wall <a href="${parseInt(req.params.number_of_bottles - 1)}"> Take one down, pass it around </a>`)
    } else {
        res.send(`<a href="/">Start over</a>`)
    }

})


app.listen(PORT, () => {

})