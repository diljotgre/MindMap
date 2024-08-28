const express = require("express"); // used to create routes
const app = express();
const bodyparser = require("body-parser");
const userRoute = require("./routes/user.routes");

module.exports = app; //so we can make use of app in any of the other files

app.use(bodyparser.json()); //parses through all the data that comes through req.body

app.use("/", userRoute);


