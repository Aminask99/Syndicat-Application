
const mongoose = require('mongoose');
const Schema =mongoose.Schema

const ProfiltSchema =new Schema({
   firstName: {
       type: String,
       // required: true,    
   },
   lastName: {
       type: String,
       // required: true,   
   },
   gmail: {
       type: String,
       // required: true,    
   },
   address: {
       type: String,
       // required: true,  
   },
   ville: {
       type: String,
       // required: true,
   }, 
   dommaine : {
       type: String,
       // required: true,
      
   },
   
});

const Profil = mongoose.model('Profil',ProfiltSchema

)

module.exports= Profil