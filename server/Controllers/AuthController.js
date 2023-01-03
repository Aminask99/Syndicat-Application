const db = require("../Models/role")
const bcrypt = require("bcryptjs")
const cookie = require("../Utils/cokie")
const Role = require("../Models/role")


const Register = (req, res ) => {
   
    
    bcrypt.hash(req.body.Password, 10,  function (err, hashedPass) { //hash Pass   index type

        if (err) {

            return res.send({
                error: err
            })
        }
        // let role = req.body.role || "admin";

        // let { _id } = await Role.findOne({ role})
        console.log(req.body)
        let admin =  new db ({
            UserName: req.body.UserName,
            Password: hashedPass
           
        })
        admin.save()
        console.log(req.body)
        if (admin){
            return  res.status(200).json({
                message: 'User Creat '
            });
        }else{
            return  res.status(400).json({
                        message: "error not creat user"
                    })
        }
    })
};


const Login =async (req, res) => {


    try {
        res.cookie('access-token', cookie) //access cookie
        const user = await db.findOne({ UserName: req.body.UserName });
        console.log(user);
        if (user) {
          const cmp =  bcrypt.compare(req.body.Password, user.Password);
          if (cmp) {
            const token = user.generateAuthTokenAndSaveUser();
            return res.status(200).json({
                                    user,
                                    token
                                })
          } else {
            
            return res.status(400).json({
             message: 'Password is not matched '
                 });
          }
        } else {
        
            return res.status(400).json({
                                    message: 'Wrong username or password.'
                                });
        
        }
      } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server error Occured");
      }


    // let UserName = req.body.UserName
    // let Password = req.body.Password
    // db.findOne({
    //         $or: [{
    //             UserName: UserName
    //         }]
    //     })

    //     .then(user => {
    //         res.cookie('access-token', cookie) //access cookie
    //         if (!user) {
    //             return res.status(400).json({
    //                 message: 'Email not found'
    //             });
    //         }
    //         if (user) {
    //             let PasswordValid = bcrypt.compareSync(Password, user.Password); //hash Pass

    //             if (!PasswordValid) {
    //                 return res.status(400).json({
    //                     message: 'Password is not matched '
    //                 });
    //             }
    //             const token = user.generateAuthTokenAndSaveUser();
    //             if (user && PasswordValid ) {
    //                 return res.status(200).json({
    //                     user,
    //                     token
    //                 })
    //             } else {
    //                 return res.status(200).json({
    //                     message: 'visit your email please!!'
    //                 });
                    
    //             }
    //         }
    //     })
}   

module.exports = {
    Login,
    Register
} 