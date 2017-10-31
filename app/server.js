'use strict';

import express from 'express';
import http from 'http';
import socket from 'socket.io';
import mongoose from 'mongoose';
import {events} from '../config/events';
import {emitEvent} from './emitEvent';
import Promise from 'bluebird';

let app = express.Router();
let server = http.Server(app);
let io = socket(server);
let port = process.env.PORT || 8888;

// app.get('/', function(req, res){
//   res.sendFile('./public/');
// });

//app.use(require('express').static('./public'));

/**
 * Mongoose
 */

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/nirror_refacto');

let db = mongoose.connection;

db.on('error', () => {
	console.log('error connection db');
	throw new Error(`unable to connect to database: `);
});

db.once('open', function callback() {
	console.log('database connected');
});

/**
 * Catch socket event
 */

io.on('connection', function (socket) {
	for (let i = 0; i < events.length; i++) {
		let event = events[i];
		// For each event, see on config event...
		socket.on(event.emitString, function (domEvent) {
			// we init the listener
			emitEvent[event.type](domEvent);
		});
	}
});


server.listen(port);
