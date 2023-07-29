const db = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secretKey} = require('../config/config');

module.exports = {
    logIn: async (req,res) => {
        // Check Data.
        let userData = await db.users.findOne({
            where : {
                [db.Sequelize.Op.or]: [
                    { email:  req.body.email || null},
                    { username : req.body.username}
                ],
            }
        });

        if(userData){
            let check = await bcrypt.compare(req.body.password, userData.password);
            if(check){
                let user = {
                    id : userData.id,
                    username : userData.username || userData.email,
                }
                // JWT Token creation.
                jwt.sign(user, secretKey, { expiresIn : '300s'}, (err, token) => {
                    if(err){
                        console.error(err);
                        res.status(401).json({msg : err || 'something went wrong!'});
                        return;
                    } else {
                        // Get token
                        res.status(200).json({token : token});
                        return;
                    }
                })
            } else {
                res.status(200).json({status : false, msg : "Invalid password."});
                return;
            }
        } else {
            // user not found.
            res.status(200).json({status : false, msg : "Invalid username or email."});
            return;
        }
    }
};