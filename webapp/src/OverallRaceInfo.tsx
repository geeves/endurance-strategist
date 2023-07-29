import React from "react";
import { Text, TextInput } from "grommet";

export default function OverallRaceInfo() {
	const [value, setValue] = React.useState("");
	return (
		<>
			<Text>Race Duration (minutes)</Text>
			<TextInput
				placeholder="type here"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
		</>
	);
}
