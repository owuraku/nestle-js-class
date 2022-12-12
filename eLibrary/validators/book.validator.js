const BookValidationSchema = {
	name: {
		isLength: {
			errorMessage: 'Name should be at least 4 chars long',
			// Multiple options would be expressed as an array
			options: { min: 4 },
		},
	},
};

module.exports = BookValidationSchema;
