'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WelcomeTestQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WelcomeTestQuestion.init({
    question: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'WelcomeTestQuestion',
  });
  return WelcomeTestQuestion;
};