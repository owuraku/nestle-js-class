const {
	validateSchemaFn,
	validateMongoId,
} = require('./validation.middleware');

module.exports = {
	validateSchema: validateSchemaFn,
	validateMongoId,
};
