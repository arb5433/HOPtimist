'use strict';
module.exports = (sequelize, DataTypes) => {
  const Beer = sequelize.define('Beer', {
    name: DataTypes.STRING,
    breweryId: DataTypes.INTEGER,
    abv: DataTypes.INTEGER,
    ibu: DataTypes.INTEGER,
    styleId: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Beer.associate = function(models) {
    // associations can be defined here
  };
  return Beer;
};