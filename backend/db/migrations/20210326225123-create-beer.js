'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Beers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      breweryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Breweries'}
      },
      abv: {
        type: Sequelize.INTEGER
      },
      ibu: {
        type: Sequelize.INTEGER
      },
      styleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'BeerStyles'}
      },
      description:{
        type: Sequelize.STRING(250)
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
    return queryInterface.dropTable('Beers');
  }
};