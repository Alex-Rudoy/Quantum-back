const dotenv = require("dotenv");
dotenv.config();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendQGfeedback = async function (req, res) {
  try {
    await sgMail.send({
      from: process.env.SENDGRID_SENDER,
      to: process.env.SENDGRID_SENDER,
      subject: "Feedback from Quantum gravity",
      html: `
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <p>Message: ${req.body.message}</p>
      `,
    });
    res.json();
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json("Some error occured, please, try later - " + error.message);
  }
};
