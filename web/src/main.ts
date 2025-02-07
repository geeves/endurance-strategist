import m from "mithril";
// @ts-ignore
import Schedule from "./pages/Schedule";
import Layout from "./Layout";
import Overview from "./pages/Overview";
import Roster from "./pages/Roster";
import RaceInfo from "./pages/RaceInfo";
import PastEvents from "./pages/PastEvents";
import CreateEvent from "./pages/CreateEvent";

let root: any = document.getElementById("root");

function init() {
	m.route(
		root,
		"/race-info",
		{
			"/race-info": {
				render: () => {
					// @ts-ignore
					return m(Layout, m(RaceInfo));
				}
			},
			"/create-event": {
				render: () => {
					// @ts-ignore
					return m(Layout, m(CreateEvent));
				}
			},
			"/overview": {
				render: () => {
					// @ts-ignore
					return m(Layout, m(Overview));
				}
			},
			"/roster": {
				render: () => {
					// @ts-ignore
					return m(Layout, m(Roster));
				}
			},
			"/schedule": {
				render: () => {
					// @ts-ignore
					return m(Layout, m(Schedule));
				}
			},
			"/past-events": {
				render: () => {
					// @ts-ignore
					return m(Layout, m(PastEvents));
				}
			}
		}
	);
}

init();
