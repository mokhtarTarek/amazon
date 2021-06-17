import express from "express";
import expressAsyncHandler from 'express-async-handler'
//import { getToken } from "../util";
import User from "../models/userModel.js";
import data from "../data.js";

const userRouter = express.Router();

userRouter.get("/seed",expressAsyncHandler( async (req, res) => {
    //await User.remove({})//remove all users before insertMany
    const createdUsers = await User.insertMany(data.users);
    res.send(createdUsers);
   
}));

userRouter.post("/signin", async (req, res) => {
  console.log(req.body);

  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (signinUser) {
    res.send({
      _id: signinUser.id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser),
    });
  } else {
    res.status(401).send({ msg: "Invalid Email or Password" });
  }
});


userRouter.post("/register", async (req, res) => {
  const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
      
  }) 
  const newUser = await user.save(); 
  if (newUser){
      res.send({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        token: getToken(newUser),

      })
  }else {
    res.status(401).send({ msg: "Invalid User Data" });
  }
});


export default userRouter;
