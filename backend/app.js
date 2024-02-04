const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const ExpressError = require("./utils/ExpressError");
const bodyParser = require("body-parser");

const todoRouter = require("./routes/todo");
const userRouter = require("./routes/userRoute");
const User = require("./model/userModel");
const cors = require("cors");
const Task = require("./model/taskModel");

const app = express();
app.use(cors());

dotenv.config({ path: "./config.env" });

const DB_URL = process.env.DATABASE_URL;
mongoose.set("strictQuery", true);
mongoose
	.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log(`Database connected successfully`));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const secret = "thisshouldbeabettersecret!";

const sessionConfig = {
	// store,
	name: "session",
	secret,
	resave: false,
	saveUninitialized: true,
	cookie: {
		httpOnly: true,
		// secure: true,
		expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
		maxAge: 1000 * 60 * 60 * 24 * 7,
	},
};

app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	// console.log(`user: ${req.user}`);
	// console.log(`body: ${req.body}`);
	next();
});

app.use("/", userRouter);
app.use("/todo", todoRouter);

app.all("*", (req, res, next) => {
	next(new ExpressError("Page Not Found", 404));
});

app.listen(3001, () => {
	console.log("Listen on Port 3001");
});
