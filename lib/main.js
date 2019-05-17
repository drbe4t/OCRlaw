'use strict';

var _tesseract = require('tesseract.js');

var _tesseract2 = _interopRequireDefault(_tesseract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');
});

var TesseractWorker = _tesseract2.default.TesseractWorker;

var worker = new TesseractWorker();

worker.recognize('http://jeroen.github.io/images/testocr.png').then(function (result) {
  console.log(result);
});