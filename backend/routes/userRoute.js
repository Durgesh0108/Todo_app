const express = require("express");
const router = express.Router();
const User = require("../model/userModel");
const passport = require("passport");
const catchAsync = require("../utils/catchAsync");

// router.get("/register", (req, res) => {
// 	res.render("user/register");
// });

router.post(
	"/register",
	catchAsync(async (req, res, next) => {
		try {
			console.log(req.body);
			const { username, password, email } = req.body;

			const newUser = new User({
				username,
				email,
				password,
			});
			console.log(newUser);
			// console.log(user);
			// const registeredUser = await User.register(user, password);
			// console.log(registeredUser);
			// req.login(registeredUser, (err) => {
			// 	console.log(err);
			// });
			await newUser.save();
			res.json({
				status: "success",
				message: "Registration Successful! Please login to continue.",
				data: newUser,
			});
		} catch (e) {
			res.send(e);
		}
	})
);

// router.get("/login", (req, res) => {
// 	res.render("user/login");
// });

router.post("/login", passport.authenticate("local"), (req, res) => {
	res.json(req.user);
	req.session.currentUser = req.user;
	console.log("User", req.session.currentUser.id);
	console.log(req.session);
});

// router.post(
// 	"/login",
// 	passport.authenticate("local", { failureRedirect: "/login" }),
// 	async (req, res) =>
// 	{
// 		const { username, password } = req.body;
// 		const user = await
// 		req.login()
// 		// const redirectUrl = req.session.returnTo || "/";
// 		// delete req.session.returnTo;
// 		res.redirect("/");
// 		res.json({
// 			status: "success",
// 			message: "Logged in successfully",
// 			data: red.body,
// 		});
// 	}
// );

router.get("/logout", (req, res, next) => {
	req.logout(function (err) {
		if (err) {
			return next(err);
		}
		res.redirect("/");
	});
});

router.get("/alluser", async (req, res, next) => {
	const allUsers = await User.find({});
	res.json({
		data: allUsers,
	});
});

router.delete("/deleteuser", async (req, res, next) => {
	const { id } = req.body;
	const user = await User.findByIdAndDelete(id);
	res.json({
		status: "Deleted",
		data: user,
	});
});
module.exports = router;
