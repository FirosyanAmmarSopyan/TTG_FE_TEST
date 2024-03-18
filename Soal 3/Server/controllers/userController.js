const { where } = require("sequelize");
const { User } = require("../models/index");

class UserController {
  static async getAllUser(req , res){
    try {
        const users = await User.findAll()
        return users
    } catch (error) {
        console.log(error)
    }
  }


  static async getOneById(req , res){
    try {
        const {id} = req.params
        const user = await User.findByPk(id)
        if (!user) {
          console.log('tidak ada user id : ' , id);
        }
      return user
    } catch (error) {
      console.log(error);
    }
  }

  static async createUser(req, res) {
    try {
      const {firstName, lastName, email, password, phoneNumber , address } = req.body;
      const user = await User.create({
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        address
      });
      console.log(user, "<><><><><><>><><><><>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      return user
    } catch (error) {
      console.log(error,"<><><><>");
    }
  }

  static async updateUser(req , res){
    try {
      const {id} = req.params
      const {firstName , lastName , email , phoneNumber , address} = req.body

      const findUser = await User.findByPk(id)
      if (!findUser) {
        return {Error : "user not found"}
      }
      const updateUser = await User.update(
        {
        firstName,
        lastName,
        email,
        phoneNumber,
        address
      } , 
      {where: {id}}
      )
      return `User with id ${id} success updated`
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const findUser = await User.findByPk(id)
      if (!findUser) {
        return {Error : "user not found"}
      }
      const deleteUser = await User.destroy({where : {id : id}})

      return `User succes deleted`
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = UserController;
