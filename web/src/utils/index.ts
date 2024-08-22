import m, { Component } from "mithril";
// @ts-ignore
import b from "bss";


// @ts-ignore
export function icon(svg) {
	return m('.icon', m.trust(svg));
}

// export const addIcon = icon(fs.readFileSync('../icons/add.svg', 'utf8'));
