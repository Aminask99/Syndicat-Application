const db = require("../Models/role")
const bcrypt = require("bcryptjs")
const cookie = require("../Utils/cokie")

const Login = (req, res) => {
    const {UserName , Password} = req.body;
    const admin = db.findOne({UserName: UserName}) 
     .then(admin => {
            res.cookie('access-token', cookie)

        if (!admin) {
                    return res.status(400).json({
                        message: 'Email not found'
                     
                    });
                }
                if (admin) {
                           
                            const PasswordValid = db.findOne({Password: Password}) 
            
                            if (!PasswordValid) {
                                return res.status(400).json({
                                    message: 'Password is not matched '
                                });
                            }
                            const token = admin.generateAuthTokenAndSaveUser();
                            if (admin && PasswordValid ) {
                                return res.status(200).json({
                                    admin,
                                    token
                                })
                            } else {
                                return res.status(200).json({
                                    message: 'not '
                                });
                                
                            }
                        }
                    })
                    }




        // .then(admin => {
        //     res.cookie('access-token', cookie) //access cookie
        //     if (!admin) {
        //         return res.status(400).json({
        //             message: 'Email not found'
        //         });
        //     }
        //     if (admin) {
        //         let PasswordValid =  (Password,db.Password); 

        //         if (!PasswordValid) {
        //             return res.status(400).json({
        //                 message: 'Password is not matched '
        //             });
        //         }
        //         const token = admin.generateAuthTokenAndSaveUser();
            
        //     }
        // })

module.exports = {
    Login
} 