
const nodemailer = require("nodemailer");

let mail = (data)=>{

    let transporter = nodemailer.createTransport(
        {
            service : "Gmail",
            host:"smtp.gmail.com",
            port:465,
            secure:true,
            auth: {
                user:"santanuadhikary13@gmail.com",
                pass:"pawr nnmj wqnk mjph"
            }
        });
    
        let mailOption = {
    
            to:`${data}`,
            subject:"Mail Subscription",
            html : " <h1> Thank You for Subscription </h1>"
        }
    
        transporter.sendMail(mailOption);
}


module.exports = {mail};