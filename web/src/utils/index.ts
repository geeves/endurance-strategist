import m, { Component } from "mithril";
// @ts-ignore
import b from "bss";

import Constants from "./Constants";
import Connection from "./Connection";
import Colors from "./Colors";
import {State} from "./State";


// @ts-ignore
export function icon(svg) {
	return m(".icon", m.trust(svg));
}

// export const addIcon = icon(fs.readFileSync('../icons/add.svg', 'utf8'));


// @ts-ignore
export function Collator() {
	return new Intl.Collator("en", {sensitivity: "base" });
} // for future,,, may be overkill for now.

// @ts-ignore
export function sortCarList(carList: Car[]): Car[] {
	return carList.sort((a, b) => {
		if (a.carName < b.carName) {
			return -1;
		}
		if (a.carName > b.carName) {
			return 1;
		}
		return 0;
	});
}

export {
	Constants,
	Connection,
	Colors,
	State
}

