const jsonwebtoken = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.status(498).json({
            message: 'Not authorized',
        });
        return;
    }

    const [, token] = authHeader.split(' ');

    if (!token) {
        res.status(498).json({
            message: 'Not authorized',
        });
        return;
    }

    try {
        const user = jsonwebtoken.decode(token, process.env.JWTSecret);
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(498).json({ message: 'Invalid token' });
    }
};
module.exports = {
    authMiddleware,
};
