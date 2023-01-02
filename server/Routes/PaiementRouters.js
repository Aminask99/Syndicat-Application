const Route= require('express').Router();
const {CreationPaiement} =require("../Controllers/PaiementController")

//! Method = Post , URL = créationAppartement , Access = public
Route.post('/creationPaiement',CreationPaiement)


module.exports=Route;