'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define('Wishlist', {
    userId: DataTypes.INTEGER,
    beerId: DataTypes.INTEGER
  }, {});
  Wishlist.associate = function(models) {
    // associations can be defined here
  };
  return Wishlist;
};