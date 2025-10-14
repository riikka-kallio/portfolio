const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4001;

const axios = require("axios");
const FormData = require("form-data");
const { emailSchema } = require("./validation");

require('dotenv').config();


const url = 'https://smtp.maileroo.com/send';


function sendEmail(fromEmail, toEmail, name, emailAddress, message) {
    let data = new FormData();

    data.append('from', `<${fromEmail}>`);
    data.append('to', `To Name <${toEmail}>`);
    data.append('subject', 'Contact Request');
    data.append('plain', `New message from\nName ${name}\nEmail address ${emailAddress}\nMessage ${message}`);
    console.log(data)

    const config = {
        method: 'post',
        url: url,
        headers: {
            'X-API-Key': process.env.APIKEY,
            ...data.getHeaders()
        },
        data: data
    }
    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
};




app.use(cors({
    origin: ['http://localhost:5173', 'https://riikka.io'],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("hello world");
});

app.post("/contact_form", async (req, res) => {
    try {

    await emailSchema.validate(req.body);
    sendEmail(process.env.SERVEREMAIL, 
        process.env.PERSONALEMAIL, 
        req.body.name, 
        req.body.email, 
        req.body.message)
    console.log(req.body.message);
    res.json({
        status: "success",
        message: "Email sent successfully"});
    } catch (error) {
        console.error(error);
        res.status(400).json({
            status: "error",
            message: error.message || "An error occurred"
        });
    }
});

app.listen(PORT, (res, err) => {
    if (err) {
        console.log("Server failed.");
    } else {
        console.log(`Listening at port ${PORT}`);
    }
});