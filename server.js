const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
const PORT = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect(`/${uuidv4()}`);
});

app.get('/:room', (req, res) => {
    res.render('room', { roomId: req.params })
})

app.listen(PORT);

console.log(`Server is running on PORT : ${PORT}`)