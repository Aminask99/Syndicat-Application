const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://Aminasalik:Aminasalik@cluster0.qhekh6k.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log("Connect to Db")
})
.catch(((error)=>{
    console.log(error)
}))