
 const mongoose = require('mongoose');
 const Schema =mongoose.Schema

 const paiementSchema =new Schema({
    Name_Client: {
        type: String,
       
    },
    date_facteur: {
        type: String,
    },
    date_payment: {
        type: String,
    },
    apartement: {
        type: Number,
      
    }, 
    
 });

const Paiement = mongoose.model('paiement',paiementSchema)
 
module.exports= Paiement