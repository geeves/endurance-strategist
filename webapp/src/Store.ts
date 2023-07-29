import { configureStore } from "@reduxjs/toolkit";
import raceReducer from "./reducers/RaceReducer";

export const store = configureStore({
	reducer: {
		raceReducer: raceReducer
	}
});

export default store;
