// const loginrequired= async(req,res,next)=>{


//     const token =req.cookies['access-token']
//     if(token){
  
//       const validatoken=  await jwt.verify(token,process.env.TOKEN_KEY)
//       if(validatoken){
  
//   res.user.validatoken.id
//   next()
//       }else{
  
//           console.log('token expires')
//       }
//       }else{
  
//           console.log('token not found')
//       }
//     }
  
//   module.exports={loginrequired}





  const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken =async (req, res, next) => {
    
    // const token =req.cookies['access-token']
    const token =
     req.cookies['access-token'] || req.headers["set-cookie"];


  if (token) {
  
    const validatoken=  jwt.verify(token,config.TOKEN_KEY)
    if(validatoken){

res.admin.validatoken.id
// next()

  }else{
    console.log('token expires')
  }}else{
    console.log('token not found')
  }
  
  
  return next();
};

module.exports = verifyToken;
