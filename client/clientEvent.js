function clickEvent(event, emitString, socket) {
  console.log("click send");
  socket.emit(emitString);
}

function domLoaded(event, emitString, socket) {
  console.log("dom send");
  socket.emit(emitString);
}

export const clientEvent = {
  "click": clickEvent,
  "DOMContentLoaded": domLoaded
};
