const nodemailer = require("nodemailer");
const { Router } = require("express")
const router = Router();



const USER = process.env.MAIL_USER;
const PASS = process.env.MAIL_PASS;

router.post('/send', (req, res) => {
    const output = `
      <p>User Message</p>
      <h3>User Info:</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;
  
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: USER, 
          pass: PASS  
      },
      tls:{
        rejectUnauthorized:false
      }
    });
  
    let mailOptions = {
        from: req.body.email, 
        to: USER, 
        subject: 'User Message',
        html: output
    };
  
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
    });

    module.exports = router