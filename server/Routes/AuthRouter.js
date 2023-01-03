const Route= require('express').Router();
const {Login} =require("../Controllers/AuthController")

//! Method = Post , URL = créationAppartement , Access = public
Route.post('/login',Login)


module.exports=Route;