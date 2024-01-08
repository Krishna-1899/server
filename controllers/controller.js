const Data = require("../models/Data");
const Contact=require("../models/Contact");

exports.getAllWorks = async (req, res) => {
	try {
		const userData = await Data.find({});
		res.json({ success: true, data: userData });
	} catch (error) {
		res.status(500).json({ success: false, error: error });
	}
};
exports.submitResponse = async (req, res) => {
  try {
    console.log("req body", req.body);
    const { name, email, message} = req.body;
    if (!name || !email || !message) {
      console.log("not all fields...");
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
    const user = await Contact.create({
      name,
      email,
      message
    });
    return res.status(200).json({
      status: 201,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};