'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name:'Tony Stark',
        username: 'ironman',
        password: 'prettyawesome',
        email: 'tony@mail.com',
        location: 'Cleveland, OH'
    },
    {
        name:'Clark Kent',
        username: 'superman',
        password: 'canfly',
        email: 'super@mail.com',
        location: 'Bakersfield, CA'
    },
    {
        name:'Bruce Wayne',
        username: 'batman',
        password: 'hasgadgets',
        email: 'bat@mail.com',
        location: 'St. Louis, MO'
    },
    {
        name: 'Johny Bravo',
        username: 'coolbravo',
        password: '12345',
        email: 'bravo@mail.com',
        location: 'Lexington-Fayette, KY'
    },
    {
        name: 'Homer Simpson',
        username: 'atomichomer',
        password: 'likecake',
        email: 'donut@mail.com',
        location: 'Lubbock, TX'
    },
    {
        name: 'Tom Sawyer',
        username: 'tommy',
        password: 'alabama',
        email: '@mail.com',
        location: 'Montgomery, Alabama'
    },
    {
        name: 'Mr Wilson',
        username: 'runfromdaniel',
        password: 'help',
        email: '@mail.com',
        location: 'Milwaukee, WI'
    },
    {
        name:'Peter Parker',
        username: 'spiderman',
        password: 'superhero',
        email: 'spider@mail.com',
        location: 'St. Petersburg, FL'
    },
    {
        name:'Oz Wizard',
        username: 'magicman',
        password: 'opuspokus',
        email: 'magic@mail.com',
        location: 'Henderson, NV'
    },
    {
        name:'Captain Caveman',
        username: 'caveman',
        password: 'andson',
        email: 'caveman@mail.com',
        location: 'Las Vegas, NV'
    },
    {
        name: 'George Jetson',
        username: 'jetson',
        password: 'future',
        email: 'gjetson@mail.com',
        location: 'Phoenix, AZ'
    }
    ], {});
      },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
    }
};
