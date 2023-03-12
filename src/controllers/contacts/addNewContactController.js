const {addContact} = require('../../models/contacts')

const addNewContact = async (req, res) => {
	const {id} = req.user
	const { name, email, phone, favorite = false, owner = id} = req.body;
	await addContact ({name, email, phone, favorite, owner})
	res.status(201).json({ message: "new contact added" });
}

module.exports = {
  addNewContact
}