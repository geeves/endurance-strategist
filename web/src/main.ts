import m from "mithril";
// @ts-ignore
import Schedule from "./Schedule";
import Layout from "./Layout";
import Overview from "./Overview";
import Roster from "./Roster";



let root: any = document.getElementById("root");

// m.mount(root, Schedule);

m.route(
	root,
	"/schedule",
	{
		"/overview": {
			render: () => {
				// @ts-ignore
				return m(Layout, m(Overview))
			}
		},
		"/roster": {
			render: () => {
				// @ts-ignore
				return m(Layout, m(Roster))
			}
		},
		"/schedule": {
			render: () => {
				// @ts-ignore
				return m(Layout, m(Schedule))
			}
		},
	}
);
