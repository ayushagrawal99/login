const middleware = (schema) => {
    return (req, res, next) => {
        let data = {
            ...req.body
        };

        const { error } = schema.validate(data);
        const valid = error == null;

        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details.map((i) => i.message).join(",");
     
            console.log("Error in validation middleware");
            console.error(error);

            res.json({status : false, msg : message})
        }
    };
};
module.exports = middleware;
