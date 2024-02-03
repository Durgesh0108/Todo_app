export const fetchTodoList = async () => {
	console.log("refteched");
	let headersList = {
		Accept: "*/*",
		// "User-Agent": "Thunder Client (https://www.thunderclient.com)",
	};
	try {
		let response = await fetch("http://localhost:3001/todo", {
			method: "GET",
			headers: headersList,
		});

		let data= await response.json();
		console.log("http fetchdata", data);
		return data;
	} catch (e) {
		return e;
	}
};

export const updateTodo = async (id) => {
	let headersList = {
		Accept: "*/*",
		"Content-Type": "application/json",
	};

	let bodyContent = JSON.stringify({
		id: id,
	});

	try {
		let response = await fetch("http://127.0.0.1:3001/todo", {
			method: "PATCH",
			body: bodyContent,
			headers: headersList,
		});

		let data = await response.json();
		console.log(data);
	} catch (e) {
		return e;
	}
};

export const deleteTask = async (id) => {
	let headersList = {
		Accept: "*/*",
		"User-Agent": "Thunder Client (https://www.thunderclient.com)",
		"Content-Type": "application/json",
	};

	let bodyContent = JSON.stringify({
		id: id,
	});
	try {
		let response = await fetch("http://127.0.0.1:3001/todo", {
			method: "DELETE",
			body: bodyContent,
			headers: headersList,
		});

		let data = await response.text();
		console.log(data);
	} catch (e) {
		return e;
	}
};

export const addTodo = async (e) => {
	e.preventDefault();
	let headersList = {
		Accept: "*/*",
		"Content-Type": "application/json",
	};

	const fd = new FormData(e.target);
	const taskData = Object.fromEntries(fd.entries());

	console.log(taskData);
	try {
		let bodyContent = JSON.stringify(taskData);

		let response = await fetch("http://127.0.0.1:3001/todo", {
			method: "POST",
			body: bodyContent,
			headers: headersList,
		});

		let data = await response.json();
		console.log(data);
	} catch (e) {
		return e;
	}
};
