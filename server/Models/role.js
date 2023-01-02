 const jwt = require('jsonwebtoken')
 const mongoose = require('mongoose');
 const Schema =mongoose.Schema

 const RoolSchema =new Schema({
    role: {
        type: String,
        required: true,
    },  
 });
 
 UserSchema.methods.generateAuthTokenAndSaveUser = async function(){
    const token = jwt.sign({ _id: this._id.toString() }, 'foormm');
    this.tokens.push({ token })
    await this.save()
    return token

 }
 const rool = mongoose.model('Role',RoolSchema)
module.exports= rool