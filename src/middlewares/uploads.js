const multer = require("multer");
const path = require("path");
const fs = require("fs").promises;

const uploadPath = path.join(__dirname, "../../", "temp");

const multerConfig = multer.diskStorage({
	destination: uploadPath,
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({
	storage: multerConfig,
});

module.exports = upload