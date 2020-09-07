const http = require('http');
const express= require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const { text } = require('express');

const app = express();


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
