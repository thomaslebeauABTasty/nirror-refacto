'use strict';

import CssSelectorGenerator from 'css-selector-generator';
import {encryptString, toJSON} from '../helpers/main';
import MutationSummary from 'mutation-summary';

const selectorGenerator = new CssSelectorGenerator;

function clickEvent(event, emitString, socket) {
	let element = event.target || event.srcElement;
	let obj = {
		type: event.type,
		tagName: element.tagName,
		target: selectorGenerator.getSelector(element),
		value: encryptString(element.value)
	};
	socket.emit(emitString, obj);
}

/**
 * @name domLoaded
 * @param {Event} event
 * @param {String} emitString
 * @param {Object} socket
 * @description send to back the dom in json format
 */
function domLoaded(event, emitString, socket) {
	const element = event.target || event.srcElement;

	let children = [];
	for (let child = element.firstChild; child; child = child.nextSibling) {
		children.push(toJSON(child, true));
	}

	// Init mutation observers
	// TODO Change it
	new MutationSummary({
		callback: (summaries) => {
			// Catch all DOM changes
			console.log(summaries);
		},
		queries: [{all: true}]
	});

	socket.emit(emitString);
}

/**
 * @name mouseEvent
 * @param {Event} event
 * @param {String} emitString
 * @param {Object} socket
 * @description send to the back mouse move event
 */
function mouseEvent(event, emitString, socket) {
	let mousePosition = [event.pageX, event.pageY];
	socket.emit(emitString, mousePosition);
}

/**
 * @name resizeEvent
 * @param {Event} event
 * @param {String} emitString
 * @param {Object} socket
 * @description send to the back resize event
 */
function resizeEvent(event, emitString, socket) {
	let pageSize = [window.innerWidth, window.innerHeight];
	socket.emit(emitString, pageSize);
}

/**
 * @name scrollEvent
 * @param {Event} event
 * @param {String} emitString
 * @param {Object} socket
 * @description send to the back scroll event
 */
function scrollEvent(event, emitString, socket) {
	let windowScroll = [window.scrollX, window.scrollY];
	socket.emit(emitString, windowScroll);
}

export const clientEvent = {
	'click': clickEvent,
	'mousemove': mouseEvent,
	'DOMContentLoaded': domLoaded,
	'resize': resizeEvent,
	'scroll': scrollEvent
};
