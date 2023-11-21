const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("Inside 1st middleware");
    next();
});

app.use((req, res, next) => {
    console.log("Inside 2nd middleware");
    res.send('<h1> hello to node js </h1>');
});

app.listen(4000, () => {
    console.log("Listening on port 4000");
})