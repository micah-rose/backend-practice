const fs = require('fs');
const express = require('express');
const fortunes = require('./data/fortunes.json');

const app = express();

app.use(express.json());

app.get('/fortunes', (req, res) => {
    res.json(fortunes);
});

app.get('/fortunes/random', (req, res) => {
    res.json(fortunes[Math.floor(Math.random() * fortunes.length)]);
})

app.get('/fortunes/:id', (req, res) => {
    res.json(fortunes.find(f => f.id == req.params.id));
})

app.post('/fortunes', (req, res) => {
    const {message, lucky_number, spirit_animal} = req.body;
    const fortune_ids = fortunes.map(f => f.id);

    const new_fortunes = fortunes.concat({
        id: (fortune_ids.length > 0 ? Math.max(...fortune_ids) : 0) + 1, 
        message, 
        lucky_number, 
        spirit_animal
    });

    fs.writeFile(
        './data/fortunes.json', 
        JSON.stringify(new_fortunes), err => console.log(err));
    res.json(new_fortunes);
})

app.put('/fortunes/:id', (req, res) => {
    const { id } = req.params;
    const { message , lucky_number, spirit_animal } = req.body;

    const old_fortune = fortunes.find(f => f.id == id);

    if (message) old_fortune.message = message;
    if (lucky_number) old_fortune.lucky_number = lucky_number;
    if (spirit_animal) old_fortune.spirit_animal = spirit_animal;

    fs.writeFile(
        './data/fortunes.json', 
        JSON.stringify(fortunes), err => console.log(err));

        res.json(fortunes);
})

module.exports = app;