const express = require('express');
const { logoutController } = require('../../controllers/auth');
const { currentUserController } = require('../../controllers/auth/currentUserController');
const authRouter = express.Router();

const {
    registrationController,
    loginController,
} = require('../../controllers/index');

const { authMiddleware } = require('../../middlewares/authMiddleware');

const { authtValidation } = require('../../middlewares/validationMiddleware');

authRouter.post('/signup', authtValidation, registrationController);
authRouter.post('/login', authtValidation, loginController);
authRouter.get('/logout', authMiddleware, logoutController);
authRouter.get('/current', authMiddleware, currentUserController);

module.exports = authRouter;
