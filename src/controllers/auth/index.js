const {	loginController} = require('./loginController')
const {	registrationController} = require('./registrationController')
const {logoutController} = require('./logoutContraller')
const {currentUserController} = require ('./currentUserController')
module.exports = {
  registrationController,
  loginController,
  logoutController,
  currentUserController
}