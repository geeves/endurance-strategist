import { createSlice } from "@reduxjs/toolkit";


const raceReducer = createSlice({
	name: "raceinfo",
	// @ts-ignore
	initialState: {
		raceInfo: {
			duration: 0
		}
	},
	reducers: {
		generate: (state) => {
			// @ts-ignore

			// @ts-ignore
			state.raceInfo = {
				duration: 0
			};
		}
	}
});

export const { generate } = raceReducer.actions;
export default raceReducer.reducer;
