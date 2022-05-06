const express  = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport")
const session = require("express-session")
const MongoStore = require ("connect-mongo")
const User = require("./models/User")
require("dotenv").config()

app.use(express.static(__dirname +"/client/public"));

mongoose.connect(process.env.DATABASE_URL, { useNewURLParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to DB"))


app.use(
    session({
        resave:true,
        saveUninitialized:true,
        secret:"FCK for the win",
        store: MongoStore.create({mongoUrl: process.env.DATABASE_URL})
    })
)

passport.use(User.createStrategy())
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
app.use(passport.initialize())
app.use(passport.session())


app.use(express.json())

const usersRouter = require("./routes/users.js");
app.use("/users", usersRouter)
const authRouter = require("./routes/auth.js");
app.use("/auth", authRouter)

app.listen(3000, () => {
    console.log("Server started on port 3000");
});