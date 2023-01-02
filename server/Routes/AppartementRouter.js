const Route= require('express').Router();
const {CreationAppartement} =require("../Controllers/AppartementControllers")

//! Method = Post , URL = créationAppartement , Access = public
Route.post('/creationAppartement',CreationAppartement)


module.exports=Route;