'use strict';

import io from 'socket.io-client';
import {events} from '../config/events';
import {clientEvent} from './clientEvent';
import throttle from 'lodash.throttle';

// Init socket
let socket = io('http://localhost:8888');

socket.on('connect_failed', function () {
	console.log('Socket failed');
});
socket.on('disconnect', function () {
	console.log('Socket disconnect');
});
socket.on('error', function () {
	console.log('Socket error');
});

/**
 *
 */
export default class NirrorClient {
	init() {

	}

	listeners() {
		for (var i = 0; i < events.length; i++) {
			const event = events[i];
			let root = document;
			if (event.type === "resize" || event.type === "scroll") {
				root = window;
			}
			root.addEventListener(event.type, (e) => {
				if (event.throttling) {
					throttle(function () {
						console.log('test');
						clientEvent[event.type](e, event.emitString, socket);
					}, 1);
				} else {
					clientEvent[event.type](e, event.emitString, socket);
				}

			});
		}
	}

}

//Init Nirror Class and listeners
let nirror_client = new NirrorClient();
nirror_client.listeners();
