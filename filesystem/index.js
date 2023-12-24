import { promisify } from 'util';
import fs from 'fs';
import path from 'path';

const readFileCallBack = (data, error) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve(data);
      } else if (error) {
        reject(error);
      }
    }, 500);
  })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const address = path.resolve('./filesystem', 'notes.txt');
// fs.readFile(address, 'UTF-8', readFileCallBack);

// Promisify fs.readFile so that Promise-based
const readFilePromise = promisify(fs.readFile);
setTimeout(() => {
  readFilePromise(address, 'utf-8')
    .then((data) => console.log(data))
    .catch((err) => console.error(err.message));
}, 1000);
console.log('Reading file...');
