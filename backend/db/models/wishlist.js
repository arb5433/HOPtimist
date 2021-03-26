'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define('Wishlist', {
    userId: DataTypes.INTEGER,
    beerId: DataTypes.INTEGER
  }, {});
  Wishlist.associate = function(models) {
    Wishlist.belongsTo(models.User, {foreignKey: 'userId'});
    Wishlist.belongsTo(models.Beer, {foreignKey: 'beerId'});
  };
  return Wishlist;
};