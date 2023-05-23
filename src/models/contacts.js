const { ContactModel } = require('./contactSchema');

const listContacts = async owner => {
    const getAllContacts = await ContactModel.find({ owner }).populate({
        path: 'owner',
        match: { id: { $ne: null } },
    });
    return getAllContacts;
};

const getContactById = async contactId => {
    const getOneContactById = await ContactModel.findById(contactId);
    return getOneContactById;
};

const removeContact = async contactId => {
    const removeContactById = await ContactModel.findByIdAndRemove(contactId);
    return removeContactById;
};

const addContact = async body => {
    const newContact = new ContactModel(body);
    await newContact.save();
};

const updateContact = async (contactId, body) => {
    const updateContactById = await ContactModel.findByIdAndUpdate(
        contactId,
        body
    );
    return updateContactById;
};

const updateStatusContact = async (contactId, favorite) => {
    const updateFavoriteField = await ContactModel.findByIdAndUpdate(
        contactId,
        favorite
    );
    return updateFavoriteField;
};

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
    updateStatusContact,
};
