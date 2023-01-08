const Route= require('express').Router();
const {craeteAppartement,updateAppartement,deleteAppartement,getAllAppartemnet,getOneAppartement} =require("../Controllers/AppartementControllers")

//! Method = Post , URL = créationAppartement , Access = public
Route.post('/craeteAppartement',craeteAppartement)

Route.put('/update/:id',updateAppartement)

Route.delete('/delete/:id',deleteAppartement)

Route.get('/getOneAppartement/:id',getOneAppartement)

Route.get('/getAllAppartemnet',getAllAppartemnet)


module.exports=Route;