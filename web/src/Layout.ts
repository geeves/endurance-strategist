import m from "mithril";
// @ts-ignore
import b from "bss";


const Main = "main" + b`
	font-family: roboto, arial, sans-serif;
`;

const NavMenu = "nav" + b`
	border-bottom: 1px solid black;
`;

const EnduranceNav = "ol" + b`
	list-style-type: none;
	padding-left: 0;
`;

const EnduranceHeader = "header" + b`

`;

const NavElement = "li" + b`
	display: inline-block;
	margin-right: 20px;
`;

const Layout = {
	view: (vnode: HTMLElement) => {
		return m(Main, [
			m(EnduranceHeader,
				[
					m("h1", "Endurance Strategist")
				]
			),
			m(
				NavMenu,
				m(EnduranceNav, [
					m(NavElement, m(m.route.Link, { href: "/overview" }, "Overview")),
					m(NavElement, m(m.route.Link, { href: "/race-info" }, "Race Info")),
					m(NavElement, m(m.route.Link, { href: "/roster" }, "Roster")),
					m(NavElement, m(m.route.Link, { href: "/schedule" }, "Schedule")),
					// m(NavElement, m(m.route.Link, { href: "/past-events" }, "Past Events")),
				])),
			m("section", vnode.children)
		]);
	}
};


export default Layout;
