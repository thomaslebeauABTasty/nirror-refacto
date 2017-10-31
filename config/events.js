'use strict'

export const events = [
  {
    'type'        : 'click',
    'emitString'  : 'click event',
    'throttling'  : false
  },
  {
    'type'        : 'DOMContentLoaded',
    'emitString'  : 'init dom',
    'throttling'  : false
  },
  {
    'type'        : 'mousemove',
    'emitString'  : 'mouse event',
    'throttling'  : true
  },
  {
    'type'        : 'resize',
    'emitString'  : 'resize event',
    'throttling'  : true
  },
  {
    'type'        : 'scroll',
    'emitString'  : 'scroll event',
    'throttling'  : true
  }
];
