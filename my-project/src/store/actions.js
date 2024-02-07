import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTaskData = createAsyncThunk("fetchTodos", async () => {
	const response = await fetch("http://127.0.0.1:3001/todo");
	const { tasks } = await response.json();
	// console.log("tasks:", tasks);
	return tasks;
});

export const addTask = createAsyncThunk("addTodo", async (task) => {
	let headersList = {
		Accept: "*/*",
		"Content-Type": "application/json",
	};

	let bodyContent = JSON.stringify({
		name: task.name,
		description: task.description,
	});
	let response = await fetch("http://127.0.0.1:3001/todo", {
		method: "POST",
		body: bodyContent,
		headers: headersList,
	});
	const { data } = await response.json();
	console.log(data);
	return {
		name: data.name,
		description: data.description,
	};
});

export const updateTask = createAsyncThunk("updateTodo", async (id) => {
	let headersList = {
		Accept: "*/*",
		"Content-Type": "application/json",
	};

	let bodyContent = JSON.stringify({
		_id: id,
	});

	let response = await fetch("http://127.0.0.1:3001/todo", {
		method: "PATCH",
		body: bodyContent,
		headers: headersList,
	});
	return id;
});

export const deleteTask = createAsyncThunk("deleteTodo", async (id) => {
	let headersList = {
		Accept: "*/*",
		"User-Agent": "Thunder Client (https://www.thunderclient.com)",
		"Content-Type": "application/json",
	};

	let bodyContent = JSON.stringify({
		_id: id,
	});
	let response = await fetch("http://127.0.0.1:3001/todo", {
		method: "DELETE",
		body: bodyContent,
		headers: headersList,
	});
	return id;
});
