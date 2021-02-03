const Tree = require('../models').Tree;
const User = require('../models').user;

const index = (req, res) => {
    Tree.findAll()
    .then(trees => {
        res.render('index.ejs', {
            trees : trees
        });    
    })
    };

const renderNew = (req, res) => {
    res.render('new.ejs');
};

const renderTrees = (req, res) => {
    Tree.findByPk(req.params.id)
    .then(tree => {
        res.render('show.ejs', { //second param must be an object
        tree: tree //there will be a variable available inside the ejs file called fruit, its value is fruits[req.params.index]
        });
    })
};

const editTree = (req, res) => {
    
    Tree.findByPk(req.params.id)
    .then(tree => {
        User.findAll()
        .then(allUsers => {
            res.render(
                'edit.ejs', //render views/edit.ejs
                { //pass in an object that contains
                    tree: tree, //the fruit object
                    users: allUsers
                }
            );    
        })
        
    })
};

const newTree =  (req, res) => {
    Tree.create(req.body)
    .then(newTree => {
        res.redirect('/trees'); //send the user back to /trees
    })
};

const updateTree = (req, res) => { //:index is the index of our fruits array that we want to change
    Tree.update(req.body, {
        where: { id: req.params.id },
        returning: true,
        }
    )
    .then(tree => {
        res.redirect('/trees'); //redirect to the index page
    })
};

const deleteTree = (req, res) => {
    Tree.destroy({ where: { id: req.params.id } })
    .then(() => {
        res.redirect('/trees');  //redirect back to index route
    })
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