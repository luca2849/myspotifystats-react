import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const initialState = {};

const store = configureStore({
	reducer: rootReducer,
	preloadedState: initialState,
	devTools: process.env.NODE_ENV !== "production",
});

export default store;
