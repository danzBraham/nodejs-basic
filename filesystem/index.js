import fs from "fs";
import path from "path";

const readFileCallBack = (data, error) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         if (data) {
            resolve(data);
         } else if (error) {
            reject(error);
         }
      }, 500);
   }).then((result) => {
      console.log(result);
   }).catch((err) => {
      console.log(err);
   });
}

const address = path.resolve("./filesystem", "notes.txt");

fs.readFile(address, "UTF-8", readFileCallBack);
