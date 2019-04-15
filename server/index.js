const express   = require('express');
const path      = require('path');
const users     = require('./controllers/users');
const userModel = require('./models/user');

const app = express();
const port = 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(express.static(path.join(__dirname, "../dist/index.html")));
app.use(function(req, res, next) { // security function, "use" = function middleware between request and controller, takes call back function with 3 parameters
  try {
    const token = (req.headers.authorization || "").split(' ')[1] // header authorization has "barrer space and then token, make sure its a string"
    req.user = userModel.getFromToken(token); // pass token in here
  } catch (error) { // default - nobody allowed in, except for the register and login page.
    const openActions = ['POST/users', 'POST/users/login', 'GET/login', 'GET/MyFriends'] // look at request, if its open let them through, if not dont, list of open actions with method and path
    if(req.method != "OPTIONS" && !openActions.includes(req.method + req.path.toLowerCase())){ // check if login required
      next(Error("Login Required")); // if any paramet is passed to next it gives an error
    }
  }
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "../NoFramework")));
app.use('/users', users); // users controller

app.get("*", (req, res)=> res.sendFile(path.join(__dirname, "../dist/index.html")))

app.use(function (err, req, res, next) { // error handling
  console.error(err.stack)
  res.status(500).send({message: err.message}); // msg => message (real message)
})
  

app.listen(port, () => console.log(`Example app http://localhost:${port}`));
