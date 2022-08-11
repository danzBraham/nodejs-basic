import EventEmitter from "events";

const myEmitter = new EventEmitter();

const birthdayEventListener = name => {
   console.log(`Happy birthday ${name}!`);
}

myEmitter.on("birthday", birthdayEventListener);
myEmitter.emit("birthday", "Zidan");