const Route= require('express').Router();
const {creationPaiement,updatePaiement} =require("../Controllers/PaiementController")

//! Method = Post , URL = créationAppartement , Access = public
Route.post('/creationPaiement',creationPaiement)
Route.put('/updatePaiement/:id',updatePaiement)


module.exports=Route;