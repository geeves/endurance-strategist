import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import cars from "./info/cars.json";
import { LocalizationProvider, TimeField } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const listCars = () => {
	return Object.entries(cars)
		.map((k) => k[1])
		.flat()
		.map((c) => (
			<MenuItem
				key={`car-${c.carId}`}
				value={c.carId}
			>
				{c.carName}
			</MenuItem>
		));
};

export default function CarInfo() {
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
				<Typography>Car Info</Typography>
				<FormControl
					variant="standard"
					sx={{ m: 1, minWidth: 120 }}
				>
					<InputLabel id="car-select-standard-label">Pick Car</InputLabel>
					<Select
						labelId="car-select-standard-label"
						id="car-select-standard"
						label="Car"
						value={""}
					>
						{listCars()}
					</Select>
				</FormControl>
				<Typography>Fuel Details</Typography>
				<TextField
					id="full-fuel"
					label="Full Fuel"
					defaultValue={101.0}
					variant="standard"
					disabled={true}
				/>
				<TextField
					id="bop-fuel"
					label="Override Fuel"
					helperText="BOP Capacity Liters"
					variant="standard"
				/>
				<Typography>Lap Details</Typography>
				<TextField
					id="average-lap-fuel"
					label="AVG Lap Fuel"
					helperText="Liters"
					defaultValue={7.71}
					variant="standard"
				/>
				<TextField
					helperText="Format example: 02:15.123"
					label="Average Lap Time"
					// onChange={(newValue) => setValue(newValue)}
				/>
			</Box>
		</LocalizationProvider>
	);
}
