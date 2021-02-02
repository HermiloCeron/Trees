const trees = require('./models/trees.js');

const express = require('express');
const app = express();//app is an object

// middleware
app.use(express.urlencoded({ extended: true }));

app.get('/trees/new', (req, res) => {
    res.render('new.ejs');
});

app.get('/trees', (req, res) => {
    res.render('index.ejs');
});

app.get('/trees/:id', (req, res) => {
    res.render('show.ejs', { //second param must be an object
        tree: trees[req.params.id] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.index]
    });
});

app.post('/trees', (req, res) => {
    trees.push(req.body);
    res.redirect('/trees'); //send the user back to /trees
});

app.listen(3000, ()=>{
    console.log("I am listening");
});
