'use strict';
module.exports = (sequelize, DataTypes) => {
  const Brewery = sequelize.define('Brewery', {
    name: DataTypes.STRING,
    countryId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Brewery.associate = function(models) {
    Brewery.hasMany(models.Beer, {foreignKey: 'breweryId'});
    Brewery.belongsTo(models.Country, {foreignKey: 'countryId'});
    Brewery.belongsTo(models.BreweryType, {foreignKey: 'typeId'});
    Brewery.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Brewery;
};