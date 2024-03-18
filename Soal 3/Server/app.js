const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const UserController = require("./controllers/userController");

app.get("/GetAll", async (req, res) => {
  try {
    const users = await UserController.getAllUser(req, res);
    if (users) {
      res.status(200).json(users);
    } else {
      res.status(500).json({ msg: `Error: Users not defined` });
    }
  } catch (error) {
    console.log("error:", error);
    res.status(500).json({ msg: `Internal Server Error` });
  }
});

app.post("/Create", async (req, res) => {
  try {
    const newUsers = await UserController.createUser(req, res);
    console.log(newUsers , "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    res.status(201).json(newUsers);
  } catch (error) {
    console.log("error : ", error);
    res.status(500).json({ msg: `Internal Server Error` });
  }
});

app.get("/GetOne/:id", async (req, res) => {
  try {
    const user = await UserController.getOneById(req, res);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: `Internal Server Error` });
  }
});

app.put("/Update/:id" , async (req , res) => {
  try {
    const userUpdate = await UserController.updateUser(req , res)
    res.status(200).json(userUpdate)
  } catch (error) {
    console.log(error)
    res.status(500).json({msg : `Internal Server Error`});
  }
})

app.delete("/Delete/:id" , async (req, res) =>  {
  try {
    const userDelete = await UserController.deleteUser(req , res)
    res.status(200).json(userDelete)
  } catch (error) {
    console.log(error);
  }
})

app.listen(port, () => {
  console.log(`Running Server In port : ${port}`);
});
