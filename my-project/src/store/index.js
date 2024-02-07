import { configureStore } from "@reduxjs/toolkit";
import TodoReducers from "./reducers";

const store = configureStore({
	reducer: { task: TodoReducers },
});

export default store;
