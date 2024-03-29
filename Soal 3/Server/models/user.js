'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        isEmail : {
          msg : "format must be email"
        },
        notEmpty : {
          msg : "email required"
        },
        notNull : {
          msg : 'email required'
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty : {
          msg : "Password required"
        },
        notNull : {
          msg : 'Password required'
        },
        len : {
          args: [5],
          msg: 'Password must be at least 5 characters long',
        }
      }
    },  
    role: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate : (user , options) => {
        let salt = bcrypt.genSaltSync(10)
        let hashPW = bcrypt.hashSync(user.password , salt)
        user.password = hashPW
        user.role = "admin"
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};