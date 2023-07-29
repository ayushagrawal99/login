const middleware = (schema) => {
    return (req, res, next) => {
        let data = {
            ...req.body
        };

        // Validate the schema.
        const { error } = schema.validate(data);
        const valid = error == null;

        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details.map((i) => i.message).join(",");
     
            console.error(error);
            res.status(403).json({status : false, msg : message})
        }
    };
};
module.exports = middleware;
