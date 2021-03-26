'use strict';
module.exports = (sequelize, DataTypes) => {
  const Brewery = sequelize.define('Brewery', {
    name: DataTypes.STRING,
    countryId: DataTypes.INTEGER
  }, {});
  Brewery.associate = function(models) {
    // associations can be defined here
  };
  return Brewery;
};