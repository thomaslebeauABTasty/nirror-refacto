'use strict';

import io from 'socket.io-client';
import { events } from '../config/events';
import { clientEvent } from './clientEvent';

// Init socket
const socket = io("http://localhost:8888");


/**
 *
 */
export default class NirrorClient {
  listeners() {
    for (var i = 0; i < events.length; i++) {
      const event = events[i];
      document.addEventListener(event.type, (e) => {
        clientEvent[event.type](e, event.emitString, socket);
      });
    }
  }

}

//Init Nirror Class and listeners
const nirror_client = new NirrorClient();
nirror_client.listeners();
