const mongoose = require("mongoose");
const  nodemailer= require("nodemailer");

const contactSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
});
contactSchema.post("save",async function(doc){
    try{
        console.log("DOC",doc);

        //transpoter
        let traspoter=nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            },
        });
        //send mail
        let info=await traspoter.sendMail({
            from:`krishna`,
            to:doc.email,
            subject:"Thank You for Contacting Me!",
            html:`<h2>Dear ${doc.name}</h2>
            <p>${doc.message}</p>
            <p>\nThank you for reaching out to me through the contact form on my portfolio. I appreciate your interest and the time you've taken to share your thoughts.</p>
            <p>
            I have received your message and will do my best to respond as soon as possible. Your feedback is valuable to me, and I look forward to the opportunity to connect with you.
            If your inquiry is urgent, feel free to reach out to me directly via email at krishngajara92@gmail.com.
            Once again, thank you for getting in touch. I'll be in contact with you shortly.
            Best regards,
            </p>
            `
        })
        console.log("info",info);
    }catch(error){
        console.log(error);
    }
})
module.exports = mongoose.model("Contact", contactSchema);
