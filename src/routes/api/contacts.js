const express = require("express");
const contactsRouter = express.Router();

const {
	addNewContact,
	changeContactById,
	changeStatusContact,
	getAllContacts,
	getOneContactById,
	removeContactById,
} = require("../../controllers/index");

const {authMiddleware} = require('../../middlewares/authMiddleware')

contactsRouter.use(authMiddleware)

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:contactId", getOneContactById);

contactsRouter.post("/", addNewContact);

contactsRouter.delete("/:contactId", removeContactById);

contactsRouter.put("/:contactId", changeContactById);

contactsRouter.patch("/:contactId/favorite", changeStatusContact);

module.exports = contactsRouter;
