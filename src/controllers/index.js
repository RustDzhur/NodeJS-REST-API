const {
	addNewContact,
	changeContactById,
	changeStatusContact,
	getAllContacts,
	getOneContactById,
	removeContactById,
} = require("./contacts/index");

const { loginController, registrationController, currentUserController, logoutController,updateAvatar } = require("./auth/index");

module.exports = {
	addNewContact,
	changeContactById,
	changeStatusContact,
	getAllContacts,
	getOneContactById,
	removeContactById,
	loginController,
	registrationController,
	currentUserController,
	logoutController,
	updateAvatar
};
