'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('BreweryTypes', [
        { type: 'Macro Brewery' },
        { type: 'Micro Brewery' },
        { type: 'Nano Brewery' },
        { type: 'Brew Pub' },
        { type: 'Home Brewery' },
        { type: 'Bar / Restaurant / Store' },
        { type: 'Cidery' },
        { type: 'Meadery' },
        { type: 'Contract Brewery' },
        { type: 'Regional Brewery' }
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('BreweryTypes', null, {});
  }
};
