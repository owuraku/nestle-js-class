const { checkSchema, validationResult } = require('express-validator');

const checkForErrors = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	next();
};

const validateSchema = (schema) => {
	return [checkSchema(schema), checkForErrors];
};

module.exports = validateSchema;
