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

module.exports = {
    renderHomepage,
    signup,
    login,
}