var express = require("express");
var router = express.Router();
let Task = require("./../model/taskModel");

router.get("/", async (req, res, next) => {
	const tasks = await Task.find({});
	res.json({
		status: "success",
		tasks,
	});
});

router.post("/", async (req, res, next) => {
	const TaskData = new Task(req.body);
	console.log(req.body);
	try {
		await TaskData.save();
		res.json({
			status: "success",
			data: TaskData,
		});
	} catch (e) {
		console.log(e);
		res.json(e);
	}
});

router.delete("/", async (req, res, next) => {
	const { _id } = req.body;
	try {
		const task = await Task.findByIdAndDelete(_id);
		if (!task)
			return res.json({
				status: "failure",
				message: "No such task found",
			});
		return res.json({
			status: "success",
			data: task,
		});
	} catch (e) {
		console.log(e);
	}
});

router.patch("/", async (req, res, next) => {
	const { _id } = req.body;
	console.log("body", req.body);
	try {
		const task = await Task.findByIdAndUpdate(_id, { completed: true });
		return res.json({
			status: "success",
			data: task,
		});
	} catch (e) {
		console.log(e);
	}
});
module.exports = router;
