import nodemailer from 'nodemailer';

//   Create Send Email
export const SendEmail = (to, subject, text) => {

    try {
        
        let transport = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "c3a07cb7daabcc",
              pass: "a204e9e80f2ad9"
            }
        });

        transport.sendMail({
            from: 'salimhasanriad@gmail.com',
            to: to,
            subject: subject,
            text: text
        });


    } catch (error) {
        console.log(error);
    }

}