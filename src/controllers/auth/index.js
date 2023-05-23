const {	loginController} = require('./loginController')
const {	registrationController} = require('./registrationController')
const {logoutController} = require('./logoutContraller')
const {currentUserController} = require ('./currentUserController')
const updateAvatar = require ('./updateAvatar')
module.exports = {
  registrationController,
  loginController,
  logoutController,
  currentUserController,
  updateAvatar,
}