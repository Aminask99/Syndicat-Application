const express = require("express")
const app = express()
const  dotenv = require('dotenv');
const config = require('./Config_Db/Config')
const routerAppartement = require("./Routes/AppartementRouter")
const routerPaiement = require("./Routes/PaiementRouters")
const Auth = require("./Routes/AuthRouter")
const roleModal = require("./Models/role")
const cookiepaeser= require("cookie-parser")
const cors = require('cors'); // prowser annalizer cookie fy header


dotenv.config();
app.use(express.json())
app.use(cookiepaeser()) 
app.use(express.urlencoded({extended:false}))
app.use(cors()); 
  
 //*routes middleware
app.use('/api', routerAppartement);
app.use('/api', routerPaiement );
app.use('/api', Auth );

// app.set("view engine", "ejs");
const PORT = process.env.PORT || 8000

app.listen(PORT, (err)=> {
    if(!err){
    console.log(`the port ${PORT} is running`)
    }else{
        console.log(err)
    }
})
module.exports=app;