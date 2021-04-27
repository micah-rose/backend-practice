const express = require('express');
const monsters = require('./routes/monsters')
const habitats = require('./routes/habitats')
const lives = require('./routes/lives')

const app = express();

app.use(express.json());
app.use('/monsters', monsters);
app.use('/habitats', habitats);
app.use('/lives', lives);

app.use((err, req, res, next) => {
    res.json(err);
})

module.exports = app;