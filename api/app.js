const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const compression = require("compression");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());

var routesContactUs = require("./component/contactus");
app.use("/contactus", routesContactUs);


app.use(express.static(path.join(__dirname, "../dist")));
app.use(function response(req, res) {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});
app.listen(3000);

module.exports = app;