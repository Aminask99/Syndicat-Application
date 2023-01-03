const Route= require('express').Router();
const {craeteAppartement,updateAppartement,deleteAppartement} =require("../Controllers/AppartementControllers")

//! Method = Post , URL = créationAppartement , Access = public
Route.post('/craeteAppartement',craeteAppartement)

Route.put('/update/:id',updateAppartement)

Route.delete('/delete/:id',deleteAppartement)


module.exports=Route;