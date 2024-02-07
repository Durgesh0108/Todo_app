import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { deleteTask, updateTask } from "../../store/actions";

export const TodoList = () => {
	const dispatch = useDispatch();

	const tasks = useSelector((state) => state.task);

	const updateTodo = async (id) => {
		dispatch(updateTask(id));
	};

	const deleteTodo = async (id) => {
		dispatch(deleteTask(id));
	};

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
									onClick={() => updateTodo(task._id)}
								>
									Complete
								</button>
							)}
							<button
								onClick={() => deleteTodo(task._id)}
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
