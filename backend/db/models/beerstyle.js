'use strict';
module.exports = (sequelize, DataTypes) => {
  const BeerStyle = sequelize.define('BeerStyle', {
    style: DataTypes.STRING
  }, {});
  BeerStyle.associate = function(models) {
    BeerStyle.hasMany(models.Beer, {foreignKey: 'styleId'});
  };
  return BeerStyle;
};