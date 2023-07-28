const db = require('../models/index');
const bcrypt = require('bcryptjs');

module.exports = {
    signUp: async (req,res) => {
        // Password encryption.
        const salt = await bcrypt.genSalt(10);
        const securePassword = await bcrypt.hash(req.body.password, salt);

        // Data preparation.
        let data = {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            username : req.body.username,
            email : req.body.email,
            password : securePassword,
        }

        // Check Data.
        let dt = await db.signup.findOne({
            where : {
                [db.Sequelize.Op.or]: [
                    { email:  data.email},
                    { username : req.body.username}
                ],
            }
        });

        if(dt){
            // Data Found.
            res.status(200).json({status : false, msg : "Email or username already exist."});
            return;
        } else {
            // New record create.
            await db.signup.create(data);
        }

        res.status(201).json({status : true, msg : "Sign-up successfully."});
        return;
    }
};