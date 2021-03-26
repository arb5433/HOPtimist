'use strict';
module.exports = (sequelize, DataTypes) => {
  const BreweryType = sequelize.define('BreweryType', {
    type: DataTypes.STRING
  }, {});
  BreweryType.associate = function(models) {
    BreweryType.hasMany(models.Brewery, {foreignKey: 'typeId'});
  };
  return BreweryType;
};