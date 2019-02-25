const express = require('express');
const user = require('../models/models/user');

const app = express.Router();

app.get("/", (req, res) => {  //get = action, "/" get request, (req.....}); is all the function

    user.add({ FirstName: "Steve", LastName: "Irwin", Password: "BobbyTables" }, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});


module.exports = app; //whats getting returned by require in index.js//

//this is a controller //