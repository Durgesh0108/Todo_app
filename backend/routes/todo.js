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
	await TaskData.save();
	res.json({
		status: "success",
		data: TaskData,
	});
});

router.delete("/", async (req, res, next) => {
	const { id } = req.body;
	const task = await Task.findByIdAndDelete(id);
	if (!task)
		return res.json({ status: "failure", message: "No such task found" });
	return res.json({
		status: "success",
		data: task,
	});
});

router.patch("/", async (req, res, next) => {
	const { id } = req.body;
	const task = await Task.findByIdAndUpdate(id, { completed: true });
	return res.json({
		status: "success",
		data: task,
	});
});
module.exports = router;
