// "use strict"
var fs = require("fs");
var http = require("http");
var path = require("path");
var url = require("url");

const request = require('request');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const express = require('express');
const router = express.Router();
const app = express();
let port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.engine("ejs", require('ejs').__express);

router.get("/", function (req, res) {
    res.render("index", { pagename: "Home" });
});
router.get("/projects", function (req, res) {
    res.render("projects", { pagename: "Projects" });
});
router.get("/contact", function (req, res) {
    res.render("contact", { pagename: "Contact" });
});
router.get("/profile", function (req, res) {
    res.render("profile", { pagename: "Profile" });
});
router.post("/login", function (req, res) {
    console.log(req.body.email);
    console.log(req.body.password);
    if (req.body.email === "mike@aol.com" && req.body.password === "abc123") {
        console.log("Welcome!");
        res.redirect("/profile");
    }
    else {
        console.log("Your username or password was incorrect!");
        // res.redirect("/");
    }
});

app.use(express.static("public"));
app.use('/', router);

let server = app.listen(port, err => {
    if (err) {
        return console.log(`Error: ${err}`);
    }
    console.log(`Server is at port: ${port}`);
});