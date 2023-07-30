import { createSlice } from "@reduxjs/toolkit";

const raceReducer = createSlice({
	name: "raceEvent",
	// @ts-ignore
	initialState: {
		raceEvent: {
			duration: 0
		}
	},
	reducers: {
		handleRaceStartOverride: (state) => {},
		handleSessionStart: (state) => {},
		handlePractice: (state) => {},
		handleQualifying: (state) => {},
		handleGameRaceStart: (state) => {},
		handleGameRaceEnd: (state) => {},
		handleRaceDuration: (state) => {
			// @ts-ignore

			// @ts-ignore
			state.raceEvent = {
				duration: 0
			};
		}
	}
});

export const {
	handleRaceStartOverride,
	handleQualifying,
	handlePractice,
	handleGameRaceStart,
	handleGameRaceEnd,
	handleRaceDuration,
	handleSessionStart
} = raceReducer.actions;
export default raceReducer.reducer;
