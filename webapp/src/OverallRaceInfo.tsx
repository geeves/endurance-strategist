import { useDispatch, useSelector } from "react-redux";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import {
	handleGameRaceEnd,
	handleGameRaceStart,
	handleRaceDuration,
	handleRaceStartOverride,
	handleSessionStart
} from "./reducers/RaceReducer";
import trackList from "./info/tracks.json";

const listTracks = () => {
	return trackList.trackList.map((t) => {
		return <MenuItem key={`track-${t.circuitId}`} value={t.circuitId}>{t.circuitName}</MenuItem>;
	});
};

export default function OverallRaceInfo() {
	const dispatch = useDispatch();
	// @ts-ignore
	let { duration } = useSelector((state) => state.raceReducer.raceEvent);
	const tracks = listTracks();
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<Box
				component="form"
				sx={{
					"& > :not(style)": { m: 1, width: "25ch" }
				}}
				noValidate
				autoComplete="off"
			>
				<Typography>Session Start (GMT)</Typography>
				<DateTimePicker
					ampm={false}
					label="GMT Time"
					onChange={() => {
						dispatch(handleSessionStart());
					}}
				/>
				<FormControl
					variant="standard"
					sx={{ m: 1, minWidth: 120 }}
				>
					<InputLabel id="demo-simple-select-standard-label">Track</InputLabel>
					<Select
						labelId="demo-simple-select-standard-label"
						id="demo-simple-select-standard"
						label="Track"
						value={""}
					>
						{listTracks()}
					</Select>
				</FormControl>
				<Typography>Pre-Race Details</Typography>
				<TextField
					id="practice-duration"
					label="Practice"
					helperText="Time in Minutes"
					variant="standard"
					onChange={() => {
						dispatch(handleRaceDuration());
					}}
				/>
				<TextField
					id="qualifying-duration"
					label="Qualifying"
					helperText="Time in Minutes"
					variant="standard"
					onChange={() => {
						dispatch(handleRaceDuration());
					}}
				/>
				<TextField
					id="gridtime-duration"
					label="Grid"
					defaultValue={2}
					variant="standard"
					disabled={true}
				/>
				<Typography>Race Details (GMT)</Typography>
				<DateTimePicker
					ampm={false}
					label="Formation Start"
					disabled={true}
				/>
				<DateTimePicker
					ampm={false}
					label="Formation Override"
					onChange={() => {
						dispatch(handleRaceStartOverride());
					}}
				/>
				<Typography>In-Game Race Details (GMT)</Typography>
				<DateTimePicker
					ampm={false}
					label="Race Start GMT"
					onChange={() => {
						dispatch(handleGameRaceStart());
					}}
				/>
				<TextField
					id="race-duration"
					label="Race Length"
					helperText="Time in Minutes"
					variant="standard"
					onChange={() => {
						dispatch(handleRaceDuration());
					}}
				/>
				<DateTimePicker
					ampm={false}
					label="Race End GMT"
					disabled={true}
					onChange={() => {
						dispatch(handleGameRaceEnd());
					}}
				/>
			</Box>
		</LocalizationProvider>
	);
}
