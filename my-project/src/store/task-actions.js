import { useSelector } from "react-redux";
import { dataActions, taskActions } from "./index";

export const fetchTaskData = () => {
	// const tasks = useSelector((state) => state.task.tasks);
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch("http://127.0.0.1:3001/todo");
			const tasks = await response.json();
			// console.log("task", tasks);
			return tasks;
		};
		try {
			const { tasks } = await fetchData();
			console.log("taskData", tasks);
			dispatch(taskActions.replaceTask({ tasks: tasks }));
			// console.log("tasks", tasks);
		} catch (e) {
			console.log(e);
		}
	};
};

export const addTask = (task) => {
	return async (dispatch) => {
		const addTaskData = async () => {
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
		};
		try {
			await addTaskData();
			dispatch(dataActions.clearData());
		} catch (e) {
			console.log(e);
		}
	};
};

export const updateTask = (id) => {
	return async (dispatch) => {
		const update = async () => {
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
		};
		try {
			await update();
			dispatch(fetchTaskData());
		} catch (e) {
			console.log(e);
		}
	};
};

export const deleteTask = (id) => {
	return async (dispatch) => {
		const deleteTodo = async () => {
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
		};
		try {
			await deleteTodo();
			dispatch(fetchTaskData());
		} catch (e) {
			console.log(e);
		}
	};
};
