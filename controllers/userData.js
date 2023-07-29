const db = require('../models/index');

module.exports = {
    userData : async (req, res, next) => {
        try {
            // Fetch Data.
            let userData = await db.users.findAll({
                attributes: {
                    exclude: ['password']
                },
            });

            if(userData && userData.length > 0){
                // User Already Exit
                res.status(200).json({data : userData});
                return;
            } else {
                res.status(403).json({msg : 'UserData not found.'});
                return;
            }
        } catch (error) {
            console.error(error);
            res.status(401).json({msg : error || 'something went wrong!'});
            return;
        }
    }   
}


