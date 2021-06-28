// "use strict"
var fs = require("fs");
var http = require("http");
var path = require("path");
var url = require("url");

const express = require('express');
const router = express.Router();
const app = express();
let port = 8080;


const request = require('request');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const ejs = require('ejs');
app.set("view engine", "ejs");
app.engine("ejs", require('ejs').__express);

const session = require("express-session");
app.use(session({ secret: "secret", saveUninitialized: true, }))
let sess;

router.get("/", function (req, res) {
    sess = req.session;
    res.render("index", { pagename: "Home", sess: sess });
});
router.get("/projects", function (req, res) {
    sess = req.session;
    res.render("projects", { pagename: "Projects", sess: sess });
});
router.get("/contact", function (req, res) {
    sess = req.session;

    res.render("contact", { pagename: "Contact", sess: sess });
});
router.get("/profile", function (req, res) {
    sess = req.session;
    if (typeof (sess) == "undefined" || sess.loggedin != true) {
        var errors = ["Not authenticated."];
        sess.destroy(function (err) {
            res.redirect("/");
        })
        res.render("index", { pagename: "Home", errors: errors })
    }
    else {
        res.render("profile", { pagename: "Profile", sess: sess })
    }
});
router.get("/logout", function (req, res) {
    sess = req.session;
    sess.destroy(function (err) {
        res.redirect("/");
    })
})
router.post("/login", function (req, res) {
    console.log(req.body.email);
    console.log(req.body.password);
    sess = req.session;
    let errors = [];
    if (req.body.email == "")
        errors.push("Email is required");
    if (req.body.password == "")
        errors.push("Password is required");
    if (req.body.email == "mike@aol.com" && req.body.password == "abc123") {
        sess.loggedin = true;
        res.render("profile", { pagename: "Profile", errors: errors, sess: sess });
    }
    else {
        res.render("index", { pagename: "Home", errors: errors, sess: sess });
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