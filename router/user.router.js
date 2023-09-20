const express = require("express");
const { UserModel } = require("../Model/usere");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const  jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());



userRouter.post("/register", (req, res) => {
  
  const { name, email, password } = req.body;
 
  bcrypt.hash(password, 10, async function (err, hash) {
    if (err) return res.send({ mesaage: "something went wrong" });
 
    try {
      let user = new UserModel({ name, email, password: hash });
      await user.save();
      res.send({
        mesaage: "user created",
      });
    } catch (error) {
      res.send({
        error,
      });
    }
  });
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.find({ email });
 if(user.length>0){
  const hash = user[0].password;
  console.log(user[0]._id);
  const token= jwt.sign({userId:user[0]._id},"hashimhashim")
  bcrypt.compare(password, hash, function (err, result) {
    if (result) {
      res.send({
        mesaage: "login success",
        token: token,
        status: 1
      });

    } else {
      res.send({
        mesaage: "login failed",
        token: token,
        status:1
      });
    }
  });
 
 }else
 {
  res.send({
    mesaage: "user does exit ",
    status:0
  });
 }
 
});

module.exports = {
  userRouter,
};
