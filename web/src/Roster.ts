import m, { Component } from "mithril";
// @ts-ignore
import b from "bss";
import addIcon from "./icons/add-alt.svg";
import deleteIcon from "./icons/trash-alt-outline.svg";

const RosterWrapper = "div" + b`
`;

const AddImage = "span" + b`
	background: url('./icons/add-alt.png')
`

function RosterList() {
	const model = {
		rosterList: []
	}
}

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
