const trees = require('../trees.js')

const index = (req, res) => {
    res.render('index.ejs', {
        trees : trees
    });
};

const renderNew = (req, res) => {
    res.render('new.ejs');
};

const renderTrees = (req, res) => {
    res.render('show.ejs', { //second param must be an object
        tree: trees[req.params.id] //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.index]
    });
};

const editTree = (req, res) => {
	res.render(
		'edit.ejs', //render views/edit.ejs
		{ //pass in an object that contains
			tree: trees[req.params.id], //the fruit object
			id: req.params.id //... and its index in the array
		}
	);
};

const newTree =  (req, res) => {
    trees.push(req.body);
    res.redirect('/trees'); //send the user back to /trees
};

const updateTree = (req, res) => { //:index is the index of our fruits array that we want to change
    trees[req.params.id] = req.body; //in our fruits array, find the index that is specified in the url (:index).  Set that element to the value of req.body (the input data)
	res.redirect('/trees'); //redirect to the index page
};

const deleteTree = (req, res) => {
	trees.splice(req.params.id, 1); //remove the item from the array
	res.redirect('/trees');  //redirect back to index route
};

module.exports = {
    index,
    renderNew,
    renderTrees,
    editTree,
    newTree,
    updateTree,
    deleteTree,
};