const jwt = require('jsonwebtoken');

const PAGE_SIZE = 20;
const getPaginationValues = (pagination, limitToUse = PAGE_SIZE) => {
	const limit = limitToUse;
	const page = pagination.page ?? 1;
	const skip = (page - 1) * limit;
	return { skip, limit };
};

const generateToken = (dataToSign, expiresIn = process.env.JWT_EXPIRES) => {
	return jwt.sign(dataToSign, process.env.SECRET_KEY);
};

module.exports = {
	getPaginationValues,
	generateToken,
};
