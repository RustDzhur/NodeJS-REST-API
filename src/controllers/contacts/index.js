const { addNewContact } = require("./addNewContactController");
const { changeContactById } = require("./changeContactByIdController");
const { changeStatusContact } = require("./changeStatusContactByIdController");
const { getAllContacts } = require("./getAllContactsController");
const { getOneContactById } = require("./getOneContactByIdController");
const { removeContactById } = require("./removeContactByIdController");

module.exports = {
	addNewContact,
	changeContactById,
	changeStatusContact,
	getAllContacts,
	getOneContactById,
	removeContactById,
};
