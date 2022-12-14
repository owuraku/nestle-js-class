const IDValidator = {
	id: {
		in: ['params'],
		custom: {
			options: async (value, { req, location, path }) => {
				return ObjectId(value);
			},
		},
	},
};

module.exports = IDValidator;
