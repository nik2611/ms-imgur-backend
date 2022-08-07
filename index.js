//import statements
const express = require("express");

//configuration

//app initialisation
const app = express();



//app middlewares

//app routes
app.get("/", (req, res) => {

    const {name} = req.query;
    console.log(name);
    res.send(`Hello ${name}. Welcome to my server`);

})

//app listen
app.listen(8000, () => {console.log("The server started at port 8000")})

