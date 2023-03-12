const { Conflict, Unauthorized } = require('http-errors');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const { User } = require('../db/authSchema');

const signup = async (email, password) => {
    const user = await User.findOne({ email });
    if (user) {
        throw new Conflict('Email in use');
    }
    const result = await User.create({ email, password });
    return result;
};

const signin = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Unauthorized('Email or password is wrong');
    }
    const passCompare = bcrypt.compareSync(password, user.password);
    if (!passCompare) {
        throw new Unauthorized('Email or password is wrong');
    }
    const payload = {
        id: user._id,
    };
    const token = jsonwebtoken.sign(payload, process.env.JWTSecret, {
        expiresIn: '1h',
    });
    return token;
};

module.exports = {
    signup,
    signin,
};
