'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Breweries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: false
      },
      countryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Countries'}
      },
      typeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'BreweryTypes'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Breweries');
  }
};