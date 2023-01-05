const jwt = require('jsonwebtoken')
 const mongoose = require('mongoose');
 const Schema =mongoose.Schema

 const AdminSchema =new Schema({
    UserName: {
        type: String,
       
    },
    Password: {
        type: String,
    },
    tokens:[{
        token:{ 
            type: String, 
        }
    }],
    role: {
        type: mongoose.Types.ObjectId,
        ref: "Role"  // refernse table 
    }
    
 });
 AdminSchema.methods.generateAuthTokenAndSaveUser = async function(){
    const token = jwt.sign({ _id: this._id.toString() }, 'foormm');
    this.tokens.push({ token })
    await this.save()
    // return token
    console.log(token)

 }
 const User = mongoose.model('admin',AdminSchema)
 
module.exports= User