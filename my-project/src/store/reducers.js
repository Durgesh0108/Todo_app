import { createSlice } from "@reduxjs/toolkit";
import { fetchTaskData, deleteTask, updateTask, addTask } from "./actions";

const todoSlice = createSlice({
	name: "todo",
	initialState: {
		tasks: [],
		data: {
			updateId: "",
			deleteId: "",
			name: "",
			description: "",
		},
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchTaskData.fulfilled, (state, action) => {
				state.tasks = action.payload;
			})
			.addCase(addTask.fulfilled, (state, action) => {
				state.data.name = action.payload.name;
				state.data.description = action.payload.description;
			})
			.addCase(updateTask.fulfilled, (state, action) => {
				state.data.updateId = action.payload;
			})
			.addCase(deleteTask.fulfilled, (state, action) => {
				state.data.deleteId = action.payload;
			});
	},
});

const TodoReducers = todoSlice.reducer;

export default TodoReducers;
