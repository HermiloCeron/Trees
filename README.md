# Project Two: Tree club app

* Team Members: Tom and Hermilo

## App idea

An app to help you choose the rigth tree for your garden.

## Technologies employed

* Node.js
* Postgres
* Express
* EJS
* Heroku

## Planing and approach taken

* Brainstorm for the app idea
    + Pets
    + Tourist
    + Gardening
        - Trees
    + Tea
    + Birds
    + Tools
* Wireframe and define databases and their relationships
    + ![Wireframe](./documentation/wireframe.png)
    + ![Databases](./documentation/tree_databases.png)
        - Users data
        ```javascript
        {
            name: 'Mr Wilson',
            username: 'runfromdaniel',
            password: 'help',
            email: '@mail.com',
            location: 'Milwaukee, WI'
        },
        ```
        - Trees data
        ```javascript
        // Willow
        {
            name : "Willow",
            img : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Salix_alba_Morton.jpg/220px-Salix_alba_Morton.jpg",
            height: "Medium",
            deciduous: true
        },
        ```
        - Climate data
        ```javascript
        {
            name : 'Tropical Monsoon',
            temperature : 'high',
            humidity: 'high',
            wind: 'high',
            altitude: 'low'
        },
        ```
        - Soil type data
        ```javascript
        {
            name : 'Clay',
            moisture : 'low',
            nutrientContent: "low",
            soilDepth: "low"
        },
        ```
* Build the app basic structure using pair programing taking fruit-app as boilerplate
    + Pair programing organization:
        - Driver: Tom
        - Navigator: Hermilo
    + Boilerplate
        - [Basic server set-up](https://git.generalassemb.ly/jd-seir-6/express-intro/blob/master/README.md)
        - [Basic MVC set up](https://git.generalassemb.ly/jd-seir-6/MVC/blob/master/README.md)
        - [New and create routes using express](https://git.generalassemb.ly/jd-seir-6/NEW_Create_Express/blob/master/README.md)
        - [Update and create routes using express](https://git.generalassemb.ly/jd-seir-6/delete-express/blob/master/README.md)
        - [Express controllers](https://git.generalassemb.ly/jd-seir-6/express-controllers/blob/master/README.md)
        - [User model](https://git.generalassemb.ly/jd-seir-6/express-user-model/blob/master/README.md)
        - [Sequelize](https://git.generalassemb.ly/jd-seir-6/sequelize-intro/blob/master/README.md)
        - [Set-up databases associations](https://git.generalassemb.ly/jd-seir-6/sequelize-associations/blob/master/README.md)
        - [Heroku deployment](https://git.generalassemb.ly/jd-seir-6/nodejs-postgres-heroku-deployment/blob/master/README.md)
* After that, split the job in specific tasks. For example: documentation, styling, etc

## User stories

1.	As a new user, I want to register so that I can have access to information about all trees on this site.
2.	As a user I want to be able to search information about trees in order to assist me in understanding what trees are good choices for my garden (shade, water requirements, soil type, temperature, disease, maximum height, region).
3.	As a user I want to be able to add a new tree species that is not in the database.
4.	As a user I want to be able to set an owner for a tree.
5.	As a user I want to be able to edit information in a tree’s database.

## Unsolved problems

- [JWT and bcrypt](https://git.generalassemb.ly/jd-seir-6/jwt-auth)

## Link to the app

* [Git repo](https://github.com/tjgores/Trees)
* [Heroku deployment](https://treeclub-app.herokuapp.com/users)