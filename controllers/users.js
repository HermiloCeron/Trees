const users = require('../models/users');

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
    res.render('./users/profile.ejs', {
        user:users[req.params.id],
        id:req.params.id
    })
}

const createUser = (req, res) => {
    users.push(req.body)
    res.redirect('/users/profile/'+ (users.length-1))
}

const editUser = (req, res) => {
    users[req.params.id] = req.body
    res.redirect('/users/profile/' + req.params.id)
    }

const loginUser = (req, res) => {
    for (i=0; i<users.length; i++) {
        if (users[i].username === req.body.username && users[i].password === req.body.password) {
            res.redirect('/users/profile/' + i)        
        }
    }
    res.redirect('/users/signup/')
    }    

module.exports = {
    renderHomepage,
    signup,
    login,
    createUser,
    showProfile,
    editUser,
    loginUser,
}