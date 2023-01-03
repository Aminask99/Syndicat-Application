const Route= require('express').Router();
const {CreationAppartement,UpdateAppartement} =require("../Controllers/AppartementControllers")

//! Method = Post , URL = créationAppartement , Access = public
Route.post('/create',CreationAppartement)

Route.put('/update/:id',UpdateAppartement)


module.exports=Route;