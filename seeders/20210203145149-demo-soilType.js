'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
         await queryInterface.bulkInsert('soilTypes', [
          {
            name : 'Sandy',
            moisture : 'low',
            nutrientContent: 'low',
            soilDepth: 'low'
        },
        
        {
            name : 'Silt',
            moisture : 'high',
            nutrientContent: "high",
            soilDepth: 'medium'
        },
        
        {
            name : 'Clay',
            moisture : 'low',
            nutrientContent: "low",
            soilDepth: "low"
        },
        
        {
            name : 'Peaty',
            moisture : 'high',
            nutrientContent: "low",
            soilDepth: "low"
        },
        
        {
            name : 'Loamy',
            moisture : 'high',
            nutrientContent: "high",
            soilDepth: "high"
        },
        
        {
            name : 'Chalky',
            moisture : 'low',
            nutrientContent: "low",
            soilDepth: "low"
        }
     ], {});
      },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('soilTypes', null, {});
  }
};
