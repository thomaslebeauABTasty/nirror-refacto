'use strict';

import express from "express";
import http    from "http";
import socket  from "socket.io";
import mongoose from "mongoose";
import { events } from "../config/events";
import { emitEvent } from "./emitEvent";
import Promise from "bluebird";

const app = express.Router();
const server = http.Server(app);
const io = socket(server);
const port = process.env.PORT || 8888;



// app.get('/', function(req, res){
//   res.sendFile('./public/');
// });

//app.use(require('express').static("./public"));

console.log("app launch");

/**
 * Mongoose
 */

mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/nirror_refacto');

var db = mongoose.connection;

db.on('error', () => {
  console.log("error connection db");
  throw new Error(`unable to connect to database: `);
});

db.once('open', function callback () {
  console.log("database connected");
});

/**
 * Catch socket event
 */

io.on('connection', function(socket){
  for (var i = 0; i < events.length; i++) {
    const event = events[i];
    socket.on(event.emitString, function(){
      emitEvent[event.type]();
    });
  }
});


server.listen(port);
