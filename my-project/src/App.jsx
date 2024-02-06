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

	useEffect(() => {
		dispatch(fetchTaskData());
	}, [dispatch, data.name]);

	useEffect(() => {
		if (data.name === "" || data.description === "") {
			return;
		}
		dispatch(addTask(data));
	}, [data, dispatch]);


	useEffect(() => {
		if (task.updateId === "") {
			return;
		}
		dispatch(updateTask(task.updateId));
	}, [task.updateId, dispatch]);

	useEffect(() => {
		if (task.deleteId === "") {
			return;
		}
		dispatch(deleteTask(task.deleteId));
	}, [task.deleteId, dispatch]);

	return (
		<>
			<div className="bg-[#333333] flex flex-col gap-8 py-16 items-center min-h-screen w-full">
				<h1 className="text-white text-6xl font-semibold">My Todo</h1>
				<TodoForm />
				<TodoList />
			</div>
		</>
	);
}

export default App;
