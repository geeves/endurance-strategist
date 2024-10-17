import m, { Component } from "mithril";
// @ts-ignore
import b from "bss";
import addIcon from "./icons/add-alt.svg";
import deleteIcon from "./icons/trash-alt-outline.svg";
import {Driver} from "./Driver";

const RosterWrapper = "div" + b`
`;

const openDb = indexedDB.open("endurance");


const AddImage = "span" + b`
	background: url('./icons/add-alt.png')
`

function RosterList() {
	const model = {
		value : "",
		rosterList: []
	}

	const onkeyup = (event: { target: { value: string; }; }) => {
		model.value = event.target.value;
	};
}
// https://medium.com/@nksCodingLearnings/pure-js-color-picker-an-npm-color-picker-package-66ff2badcd82
// https://github.com/NKSCodingLearnings/PureJs-Color-Picker
// coloris https://github.com/melloware/coloris-npm
const Roster: Component = {
	view: () => {
		return m(
			RosterWrapper,
			[
				m("h2", "Roster"),
				m("img", {src: addIcon, width: "40px", height: "40px"}),
				m("img", {src: deleteIcon, width: "40px", height: "40px"}),
			]
		);
	}
};


export default Roster;
