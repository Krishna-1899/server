const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
	category: {
		type: String,
		required: true,
	},
	name:{
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
    languages:[{
        type:String,
    }],
	githubLink: {
		type: String,
		required: true,
		maxLength: 20,
	},
	preview:{
		type:String
	},
	image: {
		type: String,
	},
});
module.exports = mongoose.model("Data", dataSchema);
