'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  posts.init({
    title: DataTypes.STRING,
    category: DataTypes.NUMBER,
    text: DataTypes.STRING,
    isPublic: DataTypes.BOOLEAN,
    authorId: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};