import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { updateTodo } from "../../utils/http";

export const TodoForm = () => {
	// const { } = useQuery({
	// 	queryKey: [ "todo" ],
	// 	queryFn: () => updateTodo()
	// })

	const addTodo = async (e) => {
		e.preventDefault();
		let headersList = {
			Accept: "*/*",
			"Content-Type": "application/json",
		};

		const fd = new FormData(e.target);
		const taskData = Object.fromEntries(fd.entries());

		console.log(taskData);
		let bodyContent = JSON.stringify(taskData);

		let response = await fetch(
			"https://todoapplication-fcc621cd0a7d.herokuapp.com/todo",
			{
				method: "POST",
				body: bodyContent,
				headers: headersList,
			}
		);

		let data = await response.json();
		console.log(data);
	};

	return (
		<div className="bg-[#444444] p-4 w-3/4">
			<form
				className="flex items-center justify-between "
				// action="http://127.0.0.1:3001/todo"
				onSubmit={addTodo}
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
