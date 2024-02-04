import { createSlice, configureStore } from "@reduxjs/toolkit";

const taskSlice = createSlice({
	name: "tasks",
	initialState: {
		tasks: [],
		updateId: "",
		deleteId: "",
	},
	reducers: {
		// addTask(state, action) {},
		updateTask(state, action) {
			state.updateId = action.payload.updateId;
		},
		deleteTask(state, action) {
			state.deleteId = action.payload.deleteId;
		},
		replaceTask(state, action) {
			console.log("actions", action.payload);
			state.tasks = action.payload.tasks;
			(prev) => {
				state.tasks;
			};
		},
	},
});

const taskdataslice = createSlice({
	name: "taskdata",
	initialState: {
		name: "",
		description: "",
	},
	reducers: {
		replace(state, action) {
			state.name = action.payload.name;
			state.description = action.payload.description;
			console.log("actions", action.payload);
		},
		clearData(state) {
			console.log("clearing");
			state.name = "";
			state.description = "";
		},
	},
});

const store = configureStore({
	reducer: { task: taskSlice.reducer, data: taskdataslice.reducer },
});

export const taskActions = taskSlice.actions;
export const dataActions = taskdataslice.actions;
export default store;
