import fs from "fs";
import path from "path";

const addr = path.resolve("./stream", "input.txt");

const readableStream = fs.createReadStream(addr, {
   highWaterMark: 15
});

const writableStream = fs.createWriteStream("./stream/output.txt");

readableStream.on("readable", () => {
   try {
      writableStream.write(`${readableStream.read()}\n`);
   } catch (error) {
      console.log(error);
   }
});

readableStream.on("end", () => {
   writableStream.end();
});