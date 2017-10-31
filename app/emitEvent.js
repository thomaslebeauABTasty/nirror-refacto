import messageCtrl from './controllers/message.controller';

function getFormEvent(clickData) {
  console.log('click received');
  console.log(clickData);
  /*messageCtrl.create({
    t: 'form',
    b: clickData
  }, (e) => {
    console.log('error');
    console.log(e);
  });*/
}

function getDomLoaded() {
  console.log('dom received');
  // const message = new Message({
  //   b: 'test'
  // });
}

function getMouseEvent(mouseData) {
  console.log('mouse received');
  console.log(mouseData);
  // const message = new Message({
  //   b: 'test'
  // });
  // messageCtrl.create({
  //   t: 'm',
  //   b: mouseData
  // }, (e) => {
  //   console.log('error');
  //   console.log(e);
  // });
}

function getScrollEvent(windowScroll) {
  console.log(windowScroll);
}

function getResizeEvent(pageSize) {
  console.log(pageSize);
}

export const emitEvent = {
    'click': getFormEvent,
    'mousemove': getMouseEvent,
    'DOMContentLoaded': getDomLoaded,
    'resize': getResizeEvent,
    'scroll': getScrollEvent
};
