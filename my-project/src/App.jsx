import { useEffect, useState, useCallback } from "react";
import { Login } from "./components/Auth/Login";
import { Register } from "./components/Auth/Register";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
	// const [TodoTask, setTodoTask] = useState([]);
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

	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<div className="bg-[#333333] flex flex-col gap-8 py-16 items-center min-h-screen w-full">
				<h1 className="text-white text-6xl font-semibold">My Todo</h1>
				<TodoForm />
				<TodoList />
				{/* <Login />
				<Register /> */}
				{/* <button onClick={todoList()}>Fetch</button> */}
			</div>
		</QueryClientProvider>
	);
}

export default App;
