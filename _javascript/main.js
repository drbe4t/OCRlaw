document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');
});

import Tesseract from 'tesseract.js';

const { TesseractWorker } = Tesseract;
const worker = new TesseractWorker();

worker
  .recognize('http://jeroen.github.io/images/testocr.png')
  .then((result) => {
    console.log(result);
  });