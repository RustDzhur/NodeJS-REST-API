const {listContacts} = require('../../models/contacts')

const getAllContacts = async (req, res) => {
	const {id} = req.user
	const getContacts = await listContacts (id)
	res.status(200).json(getContacts);
}

module.exports = {
  getAllContacts
}