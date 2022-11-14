const express = require("express");
const app = express();

//new stuff
const { MongoClient } = require('mongodb');
const uri = process.env.DB_STRING;
const client = new MongoClient(uri);
//


const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const playerRoutes = require("./routes/players");


//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For which The Server Is Listening
app.use("/", mainRoutes);
app.use("/players", playerRoutes)



//Server Running
// app.listen(process.env.PORT, () => {
//     console.log("Server is running, you better catch it!");
// });

//new stuff
const dbs = connectDB().then(() => {

    client.connect(async err => {
        if (err) { console.error(err); return false; }
        app.listen(8000, () => {
            console.log("listening for requests")
        })
    })
})
