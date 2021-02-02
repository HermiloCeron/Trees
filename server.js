const trees = require('./models/trees.js');

const express = require('express');
//include the method-override package
const methodOverride = require('method-override');
const app = express();//app is an object
const routes = require('./routes');

// middleware
app.use(express.static("public"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

app.use('/trees', routes.trees)

app.listen(3000, ()=>{
    console.log("I am listening");
});
