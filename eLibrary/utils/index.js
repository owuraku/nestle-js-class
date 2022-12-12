const PAGE_SIZE = 20;
const getPaginationValues = (pagination, limitToUse = PAGE_SIZE) => {
	const limit = limitToUse;
	const page = pagination.page ?? 1;
	const skip = (page - 1) * limit;
	return { skip, limit };
};

module.exports = {
	getPaginationValues,
};
