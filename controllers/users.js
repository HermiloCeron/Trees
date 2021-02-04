// const users = require('../users');
const Tree = require('../models').Tree;
const User = require('../models').user;

const renderHomepage = (req, res) => {
    res.render('./users/homepage.ejs')
}

const signup = (req, res) => {
    res.render('./users/signup.ejs')
}

const login = (req, res) => {
    res.render('./users/login.ejs')
}

const showProfile = (req, res) => {
    User.findByPk(req.params.id, {
        include : [
            {
            model: Tree,
            attributes: ['id','name']
            },
        ],
        attributes: ['id', 'name', 'username', 'password', 'email', 'location']
    })
    .then(user => {
        Tree.findAll()
        .then(allTrees => {
            res.render('./users/profile.ejs', {
                user:user,
                trees: allTrees
            })
        })
    })
}

const createUser = (req, res) => {
    User.create(req.body)
    .then(newUser => {
        res.redirect('/users/profile/'+ (newUser.id))
    })
}

const editUser = (req, res) => {
        User.update(req.body,  {
        where: { id: req.params.id },
        returning: true,
        }
    )
    .then(user => {
        Tree.findByPk(req.body.tree)
        .then(foundTree => {
            User.findByPk(req.params.id)
            .then(foundUser => {
                foundUser.addTree(foundTree);
                setTimeout(()=>{
                    res.redirect('/users/profile/' + req.params.id);
                },1000);
            })
        })
    })
}

const loginUser = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password,
        }
    })
    .then (user => {
        if(user){
            res.redirect('/users/profile/' + user.id)
        }else{
            res.redirect('/users/signup/')
        }
        
    })
}
    
const deleteUser = (req,res) => {
    User.destroy({ where: { id: req.params.id } })
    .then(() => {
        res.redirect('/users');
    })
}

const deleteUserTree=(req,res)=>{
    User.findByPk(req.params.userId)
    .then(foundUser => {
        Tree.findByPk(req.params.treeId)
        .then(foundTree=>{
            foundUser.removeTree(foundTree);
            // Some time out before redirecting. Reference https://www.w3schools.com/jsref/met_win_settimeout.asp
            setTimeout(()=>{
                res.redirect('/users/profile/' + req.params.userId)
            },1000);
        })
    })
}

module.exports = {
    renderHomepage,
    signup,
    login,
    createUser,
    showProfile,
    editUser,
    loginUser,
    deleteUser,
    deleteUserTree
}