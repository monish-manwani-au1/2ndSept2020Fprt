'use strict'

// npm packages
var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var session = require("express-session");

// Modules
var signuppage = require("./routes/signup.js");
var signuppost = require("./routes/signuppost.js");
var loginpage = require("./routes/login.js");
var loginpost = require("./routes/loginpost.js");
//all blogs will be shown(view all blogposts)
var homepage = require("./routes/homepage.js");
//user details given at time of signup
var myprofile = require("./routes/myprofile.js");
// To create the blogposts
var createprepost = require("./routes/createprepost.js")
var createpost = require("./routes/createpost.js");

var app = express();

// Setting Handlebars Template Engine
app.set("view engine", "hbs");

// bodyParser for form data
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Static files
app.use(express.static('public'))

// Setting express session
app.use(session({secret: "catkey"}));

var DB;

var DB_URL = process.env.DB_URL || "mongodb://localhost:27017/blogdet";

var mongoClient = new mongodb.MongoClient(DB_URL, {useNewUrlParser: true});
mongoClient.connect(function(err) {
    if(err) {
        console.log("Error connecting to MongoDB");
    } else {
        console.log("DB connection established");
        DB = mongoClient.db("blogdet");
        app.locals.DB = DB;
    }
    
});

//Login Page Route
app.get("/login", loginpage.loginpage);

// Login Page Post Route
app.post("/login", loginpost.loginpost);

//Sign up page Route
app.get("/signup", signuppage.signuppage);

//Signup Post Route
app.post("/signup", signuppost.signuppost);

// Home Page Route
app.get("/homepage", homepage.homepage);

// myprofile a GET route
app.get("/myprofile", myprofile.myprofile);

// create blogpost GET Route this is to generate empty blogpost create template
app.get("/createpost", createprepost.createprepost);

// Virtual Portfolio Page POST route for Portfolio this is to post the created blogpost
app.post("/createpost", createpost.createpost);

// Logout Route
app.get("/logout", function(request, response){
    
    request.session.user = null;
    response.redirect("/login");
})

app.listen(process.env.PORT || 3000);