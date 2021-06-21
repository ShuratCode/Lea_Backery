const express = require('express');

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.json({})
    res.status(200)
});

app.listen(port, ()=> {
    console.log(`Example app listening at http://localhost:${port}`)
});

module.exports = app