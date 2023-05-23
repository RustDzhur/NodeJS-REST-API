const express = require('express');

const router = express.Router();

const userCtrl = require ('../../controllers')

const { authMiddleware } = require('../../middlewares/authMiddleware');

const { authtValidation } = require('../../middlewares/validationMiddleware');

router.post('/signup', authtValidation, userCtrl.registrationController);
router.post('/login', authtValidation, userCtrl.loginController);
router.get('/logout', authMiddleware, userCtrl.logoutController);
router.get('/current', authMiddleware, userCtrl.currentUserController);

module.exports = router;
