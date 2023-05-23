const express = require("express");
const router = express.Router();

const contactCtrl = require ('../../controllers')

const {authMiddleware} = require('../../middlewares/authMiddleware')

router.use(authMiddleware)
router.get("/", contactCtrl.getAllContacts);
router.get("/:contactId", contactCtrl.getOneContactById);
router.post("/", contactCtrl.addNewContact);
router.delete("/:contactId", contactCtrl.removeContactById);
router.put("/:contactId", contactCtrl.changeContactById);
router.patch("/:contactId/favorite", contactCtrl.changeStatusContact);

module.exports = router;
