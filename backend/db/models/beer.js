'use strict';
module.exports = (sequelize, DataTypes) => {
  const Beer = sequelize.define('Beer', {
    name: DataTypes.STRING,
    breweryId: DataTypes.INTEGER,
    abv: DataTypes.REAL,
    ibu: DataTypes.INTEGER,
    styleId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Beer.associate = function(models) {
    Beer.belongsTo(models.Brewery, {foreignKey: 'breweryId'});
    Beer.belongsTo(models.BeerStyle, {foreignKey: 'styleId'});
    Beer.hasMany(models.Review, {foreignKey: 'beerId'});
    Beer.hasMany(models.Wishlist, {foreignKey: 'beerId'});
    Beer.belongsTo(models.User, {foreignKey: 'userId'});
  };
  return Beer;
};