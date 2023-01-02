const db = require("../Models/role")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

const Login = (req, res) => {
    let Name = req.body.Name
    let Password = req.body.Password
    db.findOne({
            $or: [{
                Name: Name
            }]
        }) // pour acceder role id collection 

        .then(user => {
            res.cookie('access-token', cookie) //access cookie
            if (!user) {
                return res.status(400).json({
                    message: 'Email not found'
                });
            }
            if (user) {
                let PasswordValid = bcrypt.compareSync(Password, user.password); //hash Pass

                if (!PasswordValid) {
                    return res.status(400).json({
                        message: 'Password is not matched '
                    });
                }
                const token = user.generateAuthTokenAndSaveUser();
                if (user && PasswordValid && user.verified) {
                    return res.status(200).json({
                        user,
                        token
                    })
                } else {
                    return res.status(200).json({
                        message: 'visit your email please!!'
                    });
                    
                }
            }
        })
}
module.exports = {
    Login,
} 