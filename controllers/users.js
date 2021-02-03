// const users = require('../users');
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
    User.findByPk(req.params.id)
    .then(user => {
        res.render('./users/profile.ejs', {
            user:user
        })
    })
    
}

const createUser = (req, res) => {
    console.log(User)
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
        res.redirect('/users/profile/' + req.params.id)
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
        res.redirect('/users/profile/' + user.id)
    })
    // for (i=0; i<users.length; i++) {
    //     if (users[i].username === req.body.username && users[i].password === req.body.password) {
    //         res.redirect('/users/profile/' + i)        
    //     }
    // }
        res.redirect('/users/signup/')
    }    
const deleteUser = (req,res) => {
    User.destroy({ where: { id: req.params.id } })
    .then(() => {
        res.redirect('/users');
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
}