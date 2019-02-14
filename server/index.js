const express = require('express') //import express//
const app = express() //running functionwe imported//
const port = 3000

app.get('/', (req, res) => res.send('Hello World!')) //app=express, this function sends hello world//

app.listen(port, () => console.log(`Example app http://localhost:${port}!`)) //tell the server that we are listening to this port-whatever that port is//