const express = require("express");
var bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to my back-end application." });
});
require("./routes/heroes.routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});

module.exports = app;