
 const mongoose = require('mongoose');
 const Schema =mongoose.Schema

 const AppartementSchema =new Schema({
    Name_appartement: {
        type: String,
        required: true,
       
       
    },
    Nb_etage: {
        type: String,
        required: true,
        
    },
    ville: {
        type: String,
        required: true,
       
    },
    prix: {
        type: Number,
        required: true,
      
      
    }, 
    address : {
        type: String,
        required: true,
       
    },
    
    role: {
        type: mongoose.Types.ObjectId,
        ref: "paiement"  // refernse table 
    }
    
 });

const Appartement = mongoose.model('Appartement',AppartementSchema)
 
module.exports= Appartement