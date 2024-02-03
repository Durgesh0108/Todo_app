const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
	name: {
		type: String,
		required: [true, "Task Must Have a Name"],
	},
	description: {
		type: String,
		required: [true, "Task Must Have a Description"],
	},
	completed: {
		type: Boolean,
		default: false,
	},
	// user: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: "User",
	// },
});

module.exports = mongoose.model("Task", TaskSchema);
