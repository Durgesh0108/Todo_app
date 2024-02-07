
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../store/actions";

export const TodoForm = () => {
	const [todoData, setTodoData] = useState({
		name: "",
		description: "",
	});

	const dispatch = useDispatch();

	const handleAddTodo = (e) => {
		e.preventDefault();
		const fd = new FormData(e.target);
		const task = Object.fromEntries(fd.entries());
		console.log(task);
		dispatch(addTask(task));

		setTodoData({ name: "", description: "" });
	};

	return (
		<div className="bg-[#444444] p-4 w-3/4">
			<form
				className="flex items-center justify-between "
				onSubmit={handleAddTodo}
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
