import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { updateTodo } from "../../utils/http";
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../store";

export const TodoForm = () => {
	const [todoData, setTodoData] = useState({
		name: "",
		description: "",
	});

	const dispatch = useDispatch();
	// const data = useSelector(state=>state.data)
	// const { } = useQuery({
	// 	queryKey: [ "todo" ],
	// 	queryFn: () => updateTodo()
	// })

	const handleSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.target);
		const { name, description } = Object.fromEntries(fd.entries());
		dispatch(dataActions.replace({ name: name, description: description }));
		setTodoData({ name: "", description: "" });
	};
	// const addTodo = async (e) => {
	// 	e.preventDefault();
	// 	let headersList = {
	// 		Accept: "*/*",
	// 		"Content-Type": "application/json",
	// 	};

	// 	const fd = new FormData(e.target);
	// 	const taskData = Object.fromEntries(fd.entries());

	// 	console.log(taskData);
	// 	let bodyContent = JSON.stringify(taskData);

	// 	let response = await fetch("http://127.0.0.1:3001/todo", {
	// 		method: "POST",
	// 		body: bodyContent,
	// 		headers: headersList,
	// 	});

	// 	let data = await response.json();
	// 	console.log(data);
	// };

	return (
		<div className="bg-[#444444] p-4 w-3/4">
			<form
				className="flex items-center justify-between "
				// action="http://127.0.0.1:3001/todo"
				onSubmit={handleSubmit}
				// method="POST"
			>
				<div className="flex gap-8">
					<div className="flex flex-col">
						<label htmlFor="name" className="text-white">
							Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							value={todoData.name}
							onChange={(e) =>
								setTodoData((prev) => ({
									...prev,
									name: e.target.value,
								}))
							}
							className="border-[#ff9900] border-2 rounded-lg px-2 py-1"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="description" className="text-white">
							Description
						</label>
						<input
							type="text"
							name="description"
							id="description"
							value={todoData.description}
							onChange={(e) =>
								setTodoData((prev) => ({
									...prev,
									description: e.target.value,
								}))
							}
							className="border-[#ff9900] border-2 rounded-lg px-2 py-1"
						/>
					</div>
				</div>
				<button
					type="submit"
					className="bg-[#ff9900] text-white rounded-full py-2 px-4"
				>
					Add Todo
				</button>
			</form>
		</div>
	);
};
