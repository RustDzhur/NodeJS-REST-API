const express = require('express');

const router = express.Router();

const userCtrl = require('../../controllers');

const { authenticate, upload } = require('../../middlewares');

const sendEmail = require('../../helpers/sendEmail');

router.post('/signup', userCtrl.registrationController, sendEmail);
router.post('/signin', userCtrl.loginController);
router.post('/logout', authenticate, userCtrl.logoutController);
router.get('/current', authenticate, userCtrl.currentUserController);
router.patch(
    '/avatars',
    authenticate,
    upload.single('avatar'),
    userCtrl.updateAvatar
);
router.get('/verify/:verificationToken', userCtrl.emailVerify);
router.post('/verify', userCtrl.verify)

module.exports = router;
