import { useEffect } from "react";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTaskData } from "./store/actions";

function App() {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.task.data);
	console.log("data", data);
	useEffect(() => {
		dispatch(fetchTaskData());
	}, [dispatch, data]);

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
