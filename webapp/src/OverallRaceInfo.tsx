import { useDispatch, useSelector } from "react-redux";
import { Text } from "grommet";

function goddammit(bar: string) {

}

export default function OverallRaceInfo() {
	const dispatch = useDispatch();
	// @ts-ignore
	let foo = useSelector((state) => state.raceReducer.raceInfo.duration);
	console.log(foo)
	return (
		<>
			<Text>Race Duration (minutes)</Text>
			<input
				placeholder="type here"
				value={0}
				onChange={(event) => goddammit(event.target.value)}
			/>
		</>
	);
}
