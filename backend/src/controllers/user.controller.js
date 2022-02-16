const User = require("../models/user.model")
const sgMail = require('@sendgrid/mail');
const { SENDGRID_API_KEY } = require("../config");
sgMail.setApiKey(SENDGRID_API_KEY);

const contact = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            phone,
            address,
            message,
            email
        } = req.body
        const newUser = new User({
            firstName,
            lastName,
            phone,
            address,
            message,
            email
        })
        await newUser.save()
        const msg = {
            to: 'avapworld@gmail.com',
            from: 'avapworld@gmail.com', // Use the email address or domain you verified above
            subject: 'New Contact',
            text: `\n 
            Name: ${firstName} ${lastName} \n
            Phone: ${phone} \n
            Address: ${address} \n
            Email: ${email} \n
            Message: ${message} \n
            `
        };
        //ES6
        sgMail
            .send(msg)
            .then(() => { res.status(200).send(newUser) }, error => {
                console.error(error);

                if (error.response) {
                    console.error(error.response.body)
                }

                res.status(400).send(error)
                console.log("Contact Error: " + error)
            });


    } catch (error) {
        res.status(400).send(error)
        console.log("Contact Error: " + error)
    }
}

module.exports = {
    contact
}