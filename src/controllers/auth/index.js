const {	loginController} = require('./loginController')
const {	registrationController} = require('./registrationController')
const {logoutController} = require('./logoutContraller')
const {currentUserController} = require ('./currentUserController')
const updateAvatar = require ('./updateAvatar')
const {emailVerify} = require ('./emailVerify')
const {verify} = require ('./verify')

module.exports = {
  registrationController,
  loginController,
  logoutController,
  currentUserController,
  updateAvatar,
  emailVerify,
  verify
}