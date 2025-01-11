const { ClientError } = require("../utils");

const validateName = (req, res, next) => {
	const { name } = req.query;
	if (name && name.includes("@")) 
	throw new ClientError("invalid name", 404);
	next();
}

module.exports = validateName