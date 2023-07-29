const jwt = require('jsonwebtoken');
const config = require('../config/config');
const secretKey = config.secretKey;

const tokenVerification = () => {
    return (req, res, next) => {
        // Get Token.
        const bearerToken = req.headers['authorization'];

        if(typeof bearerToken !== 'undefined'){
            const bearer = bearerToken.split(" ");
            const token = bearer[1];

            // Verify Token
            jwt.verify(token, secretKey, (err, authData) => {
                if(err){
                    // Token is not verified.
                    let error = new Error("Token is not valid.");
                    error.status = 403;
                    throw error;
                } else {
                    next();
                }
            });
        } else {
            let error = new Error("Token is not valid.");
            error.status = 403;
            throw error;
        }
    };
};
module.exports = tokenVerification;
