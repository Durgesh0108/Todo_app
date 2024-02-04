import { useEffect } from "react";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { useDispatch, useSelector } from "react-redux";
import {
	addTask,
	deleteTask,
	fetchTaskData,
	updateTask,
} from "./store/task-actions";

let isInitial = true;

function App() {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.data);
	const task = useSelector((state) => state.task);
	console.log("task", task.id);
	console.log("data", data);

	// let updateinitial = true;

	useEffect(() => {
		console.log("rerun");

		dispatch(fetchTaskData());
	}, [dispatch, data.name]);
	// dispatch(fetchTaskData());
	// setInterval(() => {
	// 	console.log("rerun");
	// }, 2000);

	useEffect(() => {
		if (data.name === "" || data.description === "") {
			return;
		}
		dispatch(addTask(data));
	}, [data, dispatch]);

	// update
	// const handleUpdateTodo = (id) => {
	// 	dispatch(updateTask({ id }));
	// };

	// if (task.id === "") {
	// 	// updateinitial = false;
	// 	return;
	// } else {
	// 	dispatch(updateTask(task.id));
	// }
	useEffect(() => {
		if (task.updateId === "") {
			// updateinitial = false;
			return;
		}
		dispatch(updateTask(task.updateId));
	}, [task.updateId, dispatch]);

	useEffect(() => {
		if (task.deleteId === "") {
			// updateinitial = false;
			return;
		}
		dispatch(deleteTask(task.deleteId));
	}, [task.deleteId, dispatch]);

	return (
		<>
			<div className="bg-[#333333] flex flex-col gap-8 py-16 items-center min-h-screen w-full">
				<h1 className="text-white text-6xl font-semibold">My Todo</h1>
				<TodoForm />
				<TodoList updateTodo={() => handleUpdateTodo(task.id)} />
			</div>
		</>
	);
}

export default App;
