const express = require("express")
const app = express()
const  dotenv = require('dotenv');
const config = require('./Config_Db/Config')
const routerAppartement = require("./Routes/AppartementRouter")
const routerPaiement = require("./Routes/PaiementRouters")
const roleModal = require("./Models/role")


dotenv.config();
app.use(express.json())

app.use(express.urlencoded({extended:false}))
  
 //*routes middleware
app.use('/api', routerAppartement);
app.use('/api', routerPaiement );

// app.set("view engine", "ejs");
const PORT = process.env.PORT || 8000


app.listen(PORT, (err)=> {
    if(!err){
    console.log(`the port ${PORT} is running`)
    }else{
        console.log(err)
    }
})
