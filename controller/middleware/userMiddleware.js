const validate = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);

        if (error) {
            const errorMessages = error.details.map((err) => ({
                field: err.path.join(","),
                message: err.message,
            }));

            return res.status(400).json({
                success: false,
                errors: errorMessages,
            });
        }

        next();
    };
};

module.exports = validate;