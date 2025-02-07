import m, { Component } from "mithril";
import b from "bss";
import { v4 as uuidv4 } from "uuid";
import * as localforage from "localforage";
// @ts-ignore
import * as specialEventList from "./info/special-events.json";
import { Colors, Connection, Constants } from "../utils";
import store from "../utils/Store";
import Errors from "../utils/Errors";

const { db } = Connection;

const RaceIdentifier = "h4" + b`
	font-weight: normal;
	font-size: 0.75em;
`;

// const eventInfo = getEventInfo();
let eventInfo = store.eventInfo;

try {
	const value: any = await localforage.getItem(Constants.EVENT_INFO);

	if (undefined === value || null === value) {
		throw new Error(Errors.ES_001);
	}
	// This code runs once the value has been loaded
	// from the offline store.
	store.eventInfo = value;
	console.log("value is not null?");
	console.log(value);
} catch (err) {
	// This code runs if there were any errors.
	console.log(err);
}

const increment = () => {
	store.count++;
	// m.redraw();
};

const createNewEvent = () => {
	// @ts-ignore
	store.eventInfo.eventId = uuidv4();
};

const RaceInfo: Component = {
	// oninit: () => {
	// 	store.eventInfo = eventInfo;
	// },
	view: () => {
		return m("div", [
			m("h2", "Race Event Info"),
			m(RaceIdentifier, [
					// @ts-ignore
					`ID: ${store.eventInfo.eventId}`,
					m("span", " | "),
					m("span", {
							onclick: () => {
								increment();
								createNewEvent();
								console.log("Create New Event");
							},
							style: {
								cursor: "pointer",
								color: Colors.ORANGE
							}
						}, "Create New Event"
					),
					m("span", ` | Count: ${store.count}`)
				]
			)
		]);
	}
};

export default RaceInfo;
