const trees = require('./models/trees.js');

const express = require('express');
//include the method-override package
const methodOverride = require('method-override');
const app = express();//app is an object

// middleware
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

app.get('/trees/new', (req, res) => {
    res.render('new.ejs');
});

app.get('/trees', (req, res) => {
    res.render('index.ejs', {
        trees: trees
    });
});

app.get('/trees/:id', (req, res) => {
    res.render('show.ejs', { //second param must be an object
        tree: trees[req.params.id] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.index]
    });
});

app.get('/trees/:id/edit', function(req, res){
	res.render(
		'edit.ejs', //render views/edit.ejs
		{ //pass in an object that contains
			tree: trees[req.params.id], //the fruit object
			id: req.params.id //... and its index in the array
		}
	);
});

app.post('/trees', (req, res) => {
    trees.push(req.body);
    res.redirect('/trees'); //send the user back to /trees
});

app.put('/trees/:id', (req, res) => { //:index is the index of our fruits array that we want to change
    trees[req.params.id] = req.body; //in our fruits array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
	res.redirect('/trees'); //redirect to the index page
});

app.delete('/trees/:id', (req, res) => {
	trees.splice(req.params.id, 1); //remove the item from the array
	res.redirect('/trees');  //redirect back to index route
});

app.listen(3000, ()=>{
    console.log("I am listening");
});
