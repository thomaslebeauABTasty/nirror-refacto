import messageCtrl from './controllers/message.controller';

function getClickEvent() {
  console.log('click received');
  messageCtrl.create({
    b: "test"
  }, function(e) {
    console.log("error");
    console.log(e);
  });
}

function getDomLoaded() {
  console.log('dom received');
  // const message = new Message({
  //   b: "test"
  // });
}

export const emitEvent = {
    "click": getClickEvent,
    "DOMContentLoaded": getDomLoaded
};
