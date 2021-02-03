const { mapLimit } = require("async")

const users = [
    {
        id: 0,
        name:'Tony Stark',
        username: 'ironman',
        password: 'prettyawesome',
        email: 'tony@mail.com',
        location: 'Cleveland, OH'
    },
    {
        id: 1,
        name:'Clark Kent',
        username: 'superman',
        password: 'canfly',
        email: 'super@mail.com',
        location: 'Bakersfield, CA'
    },
    {
        id: 2,
        name:'Bruce Wayne',
        username: 'batman',
        password: 'hasgadgets',
        email: 'bat@mail.com',
        location: 'St. Louis, MO'
    },
    {
        id: 3,
        name: 'Johny Bravo',
        username: 'coolbravo',
        password: '12345',
        email: 'bravo@mail.com',
        location: 'Lexington-Fayette, KY'
    },
    {
        id: 4,
        name: 'Homer Simpson',
        username: 'atomichomer',
        password: 'likecake',
        email: 'donut@mail.com',
        location: 'Lubbock, TX'
    },
    {
        id: 5,
        name: 'Tom Sawyer',
        username: 'tommy',
        password: 'alabama',
        email: '@mail.com',
        location: 'Montgomery, Alabama'
    },
    {
        id: 6,
        name: 'Mr Wilson',
        username: 'runfromdaniel',
        password: 'help',
        email: '@mail.com',
        location: 'Milwaukee, WI'
    },
    {
        id: 7,
        name:'Peter Parker',
        username: 'spiderman',
        password: 'superhero',
        email: 'spider@mail.com',
        location: 'St. Petersburg, FL'
    },
    {
        id: 8,
        name:'Oz Wizard',
        username: 'magicman',
        password: 'opuspokus',
        email: 'magic@mail.com',
        location: 'Henderson, NV'
    },
    {
        id: 9,
        name:'Captain Caveman',
        username: 'caveman',
        password: 'andson',
        email: 'caveman@mail.com',
        location: 'Las Vegas, NV'
    },
    {
        id: 10,
        name: 'George Jetson',
        username: 'jetson',
        password: 'future',
        email: 'gjetson@mail.com',
        location: 'Phoenix, AZ'
    },
]

module.exports = users;