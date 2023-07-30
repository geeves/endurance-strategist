import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import OverallRaceInfo from "./OverallRaceInfo";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CarInfo from "./CarInfo";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	color: theme.palette.text.secondary
}));

function Copyright() {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
		>
			{"Copyright © "}
			<Link
				color="inherit"
				href="https://mui.com/"
			>
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}.
		</Typography>
	);
}

export default function App() {
	return (
		<Container maxWidth="md">
			<Box sx={{ flexGrow: 2 }}>
				<Typography
					variant="h4"
					component="h1"
					gutterBottom
				>
					Endurance Strategist for iRacing
				</Typography>
				<Grid
					container
					spacing={1}
				>
					<Grid
						item
						xs={10}
					>
						<Item>
							<OverallRaceInfo />
						</Item>
					</Grid>
					<Grid
						item
						xs={10}
					>
						<Item>
							<CarInfo />
						</Item>
					</Grid>
				</Grid>
				<Copyright />
			</Box>
		</Container>
	);
}
