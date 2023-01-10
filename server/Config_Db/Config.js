const mongoose = require("mongoose");

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://Aminasalik:Aminasalik@ac-3cdhfim-shard-00-00.qhekh6k.mongodb.net:27017,ac-3cdhfim-shard-00-01.qhekh6k.mongodb.net:27017,ac-3cdhfim-shard-00-02.qhekh6k.mongodb.net:27017/?ssl=true&replicaSet=atlas-cchusd-shard-0&authSource=admin&retryWrites=true&w=majority')
.then(()=>{
    console.log("Connect to Db")
})
.catch(((error)=>{
    console.log(error)
}))