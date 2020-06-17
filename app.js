// setup aplication -> instalar paquetes
var bodyParser = require("body-parser"),
    express = require("express"),
    mongoose = require("mongoose"),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    app = express();

// APP CONFIG.
mongoose.connect("mongodb://localhost/restful_square");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(express.static("public"));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index");
});

app.listen(3000, function () {
    console.log("El servidor de YelpCamp empezó!");
});