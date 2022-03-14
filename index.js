// Node API

const express = require("express");

const port = process.env.PORT || 4000;

const app = express();

//for data parsing
const bp =require("body-parser");
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

//receive login data and return validation
app.post('/api', (req, res) => {
    console.log("Login Request Received");

    const password = "password"; //assuming password in database is "password"
    if (req.body.message == password && req.body.fName != "" && req.body.lName != ""){
        console.log("User: " + req.body.fName + " " + req.body.lName);
        console.log("Password correct");
        res.json({"authenticated" : true});//Response returned
    }
    else {
        console.log("Incorrect Password or Empty Field(s)");
        res.json({"authenticated" : false});//Response returned
    }
});

//Simple Test for API connection
app.get('/check', (req,res) => {
    res.send({express: 'Server Connected'});
});

app.listen(port, () => {
    console.log(`Node server listening on port ${port}`);
});

