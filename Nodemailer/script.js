
const nodemailer = require("nodemailer");

 
async function main() {
  
  let testAccount = await nodemailer.createTestAccount();

   
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,  
    auth: {
      user: testAccount.user, 
      pass: testAccount.pass,  
    },
  });

  
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻"1900460100068ritusingh@gmail.com', 
    to: "ritusingh29g@gmail.com",  
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
   
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
   
}

main().catch(console.error);