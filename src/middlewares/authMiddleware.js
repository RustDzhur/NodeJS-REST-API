const { User } = require("../models/authSchema");
const { HttpError } = require("../helpers");
const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
	const { authorization = "" } = req.headers;
	const [bearer, token] = authorization.split(" ");

	if (bearer !== "Bearer") next(HttpError(401));
	try {
		const { id } = jwt.verify(token, process.env.SECRET);
		const user = await User.findById(id);
		if (!user || !user.token) next(HttpError(401));
        req.user = user
		next();
	} catch {
		next(HttpError(401));
	}
};

module.exports = authenticate;