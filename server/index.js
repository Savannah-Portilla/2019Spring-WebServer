const express = require('express'); //import express//
const path = require('path');
const users = require('./controllers/users');

const app = express(); //running functionwe imported//
const port = 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../NoFramework"))); 
app.get('/', (req, res) => res.send('Hello World!')); //app=express, this function sends hello world//
app.use('/users', users); // /users = mounts to users//



app.listen(port, () => console.log(`Example app http://localhost:${port}!`)); //tell the server that we are listening to this port-whatever that port is//