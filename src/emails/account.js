const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "cadenmcmann@gmail.com",
    subject: "Welcome to the app!",
    text: `Hey ${name} thanks for joining the app. Let me know how you like it!`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "cadenmcmann@gmail.com",
    subject: "Account Deletion",
    text: `${name}, your account has successfully been deleted. We are sorry to see you go. Please let us know your reasoning for leaving below`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
