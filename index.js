//import statements
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("./utils/db");
const imageRouter = require('./routes/image.route');



//configuration
const port = process.env.PORT || 9000;
dotenv.config();
mongoose();


//app initialisation
const app = express();


//app middlewares
app.use(express.json());
app.use(imageRouter);


//app listen
app.listen(port, () => {console.log(`The server started at port ${port}`)})

