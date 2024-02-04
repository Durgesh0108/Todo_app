import React, { useCallback, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useQuery } from "@tanstack/react-query";
import { fetchTodoList } from "../../utils/http";
import { taskActions } from "../../store";
import { updateTask } from "../../store/task-actions";

export const TodoList = () => {
	const dispatch = useDispatch();

	const tasks = useSelector((state) => state.task);
	console.log("todolist", tasks);

	const update = async (id) => {
		dispatch(taskActions.updateTask({ updateId: id }));
		dispatch(updateTask(id));
		// let headersList = {
		// 	Accept: "*/*",
		// 	"Content-Type": "application/json",
		// };

		// let bodyContent = JSON.stringify({
		// 	id: id,
		// });

		// let response = await fetch("http://127.0.0.1:3001/todo", {
		// 	method: "PATCH",
		// 	body: bodyContent,
		// 	headers: headersList,
		// });
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
			{tasks.tasks.length > 0 ? (
				tasks.tasks.map((task) => (
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
									task.completed
										? "line-through text-gray-400"
										: ""
								}`}
							>
								{task.description}
							</p>
						</div>
						<div className="flex gap-4">
							{!task.completed && (
								<button
									className="rounded-full py-2 px-4 bg-white text-green-500 border-green-500 border-2"
									onClick={() => update(task._id)}
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
