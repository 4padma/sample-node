const http = require('http');
const express= require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const { text } = require('express');

const app = express();

// sgMail.setApiKey('IZOrI8WaS0GF8jaLCupF8A');

const sendgrid_username = 'santhosh';
    const sendgrid_password = 'Password@123';
    //var sendgrid = require('sendgrid')(sendgrid_username, sendgrid_password);
    // const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

app.use(cors());

//welcome page

app.get('/',(req,res) => {
    res.send("welcome to GFT");
})

// const server = http.createServer((request, response) => {
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.end("am again testing World!");
// });

// const port = process.env.PORT || 1337;
// server.listen(port);

// console.log("Server running at http://localhost:%d", port);
