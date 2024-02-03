import React, { useCallback, useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { fetchTodoList } from "../../utils/http";

export const TodoList = () => {
	const [TodoTask, setTodoTask] = useState([]);
	// const { data, isLoading } = useQuery({
	// 	queryKey: ["task"],
	// 	queryFn: fetchTodoList,
	// });

	// useEffect(() => {
	// 	if (data) {
	// 		console.log("useeffect", data.tasks);
	// 		setTodoTask(data.tasks);
	// 	}
	// }, [data]);
	// console.log("refetching")
	// cnst
	// console.log("TodoList", data.status);
	// setTodoTask(tasks);
	const fetchTodoList = async () => {
		let headersList = {
			Accept: "*/*",
			// "User-Agent": "Thunder Client (https://www.thunderclient.com)",
		};
		let response = await fetch("http://localhost:3001/todo", {
			method: "GET",
			headers: headersList,
		});

		let { tasks } = await response.json();
		console.log(tasks);
		setTodoTask(tasks);
	};
	fetchTodoList();
	// console.log(TodoTask);
	// useEffect(() => {
	// 	fetchTodoList2();
	// }, []);

	const updateTodo = async (id) => {
		let headersList = {
			Accept: "*/*",
			"Content-Type": "application/json",
		};

		let bodyContent = JSON.stringify({
			id: id,
		});

		let response = await fetch("http://127.0.0.1:3001/todo", {
			method: "PATCH",
			body: bodyContent,
			headers: headersList,
		});
	};

	const deleteTask = async (id) => {
		let headersList = {
			Accept: "*/*",
			"User-Agent": "Thunder Client (https://www.thunderclient.com)",
			"Content-Type": "application/json",
		};

		let bodyContent = JSON.stringify({
			id: id,
		});
		let response = await fetch("http://127.0.0.1:3001/todo", {
			method: "DELETE",
			body: bodyContent,
			headers: headersList,
		});
	};
	// // console.log(data)
	// let newTaskData = data;
	// console.log(newTaskData);
	// // setTask(newTaskData);
	// console.log(Task);

	return (
		<div className="flex flex-col gap-1 w-3/4">
			{/* <h1>Task</h1> */}
			{/* <ul>
				{Task.map((task) => (
					<li>{task._id}</li>
				))}
			</ul> */}
			{/* {isLoading && <p className="text-white text-2xl ">Loading...</p>} */}
			{TodoTask.length > 0 ? (
				TodoTask.map((task) => (
					<div
						key={task._id}
						className="bg-[#444444] p-6 flex justify-between items-center"
					>
						<div>
							<h3
								className={`text-[#ff9900] text-2xl font-medium ${
									task.completed
										? "line-through text-gray-400"
										: ""
								}`}
							>
								{task.name}
							</h3>
							<p
								className={`text-white text-lg m ${
									task.completed &&
									"line-through text-gray-400"
								}`}
							>
								{task.description}
							</p>
						</div>
						<div className="flex gap-4">
							{!task.completed && (
								<button
									className="rounded-full py-2 px-4 bg-white text-green-500 border-green-500 border-2"
									onClick={() => updateTodo(task._id)}
								>
									Complete
								</button>
							)}
							<button
								onClick={() => deleteTask(task._id)}
								className="rounded-full py-2 px-4 bg-white text-red-500 border-red-500 border-2"
							>
								Delete
							</button>
						</div>
					</div>
				))
			) : (
				<p className="text-white text-2xl text-center">
					No Task Available. Please Add Tasks....
				</p>
			)}
		</div>
	);
};
