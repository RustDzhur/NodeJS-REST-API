const app = require("./app");
const mongoose = require("mongoose");
require("dotenv").config();

const URL = process.env.MongoDBURL;

mongoose.set('strictQuery', true)
mongoose
	.connect(URL)
	.then(() => app.listen(3000))
	.catch((err) => {
		console.log(err.message);
		process.exit(1);
	});