const isValidId = require('./isValidId');
const authenticate = require('./authMiddleware');
const upload = require ('./uploads')
const resizeAvatar = require ('./resizeAvatar')


module.exports = {
    isValidId,
    authenticate,
    upload,
    resizeAvatar,
};
