'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    beerId: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: 'userId'});
    Review.belongsTo(models.Beer, {foreignKey: 'beerId'});
  };
  return Review;
};