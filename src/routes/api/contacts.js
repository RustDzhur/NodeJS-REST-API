const express = require('express');
const router = express.Router();

const contactCtrl = require('../../controllers');

const { authenticate, isValidId } = require('../../middlewares');

router.get('/', authenticate, contactCtrl.getAllContacts);
router.get(
    '/:contactId',
    authenticate,
    isValidId,
    contactCtrl.getOneContactById
);
router.post('/', authenticate, contactCtrl.addNewContact);
router.delete(
    '/:contactId',
    authenticate,
    isValidId,
    contactCtrl.removeContactById
);
router.put(
    '/:contactId',
    authenticate,
    isValidId,
    contactCtrl.changeContactById
);
router.patch(
    '/:contactId/favorite',
    authenticate,
    isValidId,
    contactCtrl.changeStatusContact
);

module.exports = router;
