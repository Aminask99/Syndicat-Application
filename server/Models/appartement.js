
 const mongoose = require('mongoose');
 const Schema =mongoose.Schema

 const AppartementSchema =new Schema({
    Name_appartement: {
        type: String,
       
    },
    Nb_etage: {
        type: String,
    },
    ville: {
        type: String,
    },
    prix: {
        type: Number,
      
    }, 
    address : {
        type: String,
    },
    
 });

const Appartement = mongoose.model('Appartement',AppartementSchema)
 
module.exports= Appartement