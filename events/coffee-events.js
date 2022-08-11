import EventEmitter from "events";
const myEmitter = new EventEmitter();

const makeCoffee = name => {
   console.log(`Kopi ${name} telah dibuat!`);
}

const bill = price => {
   console.log(`Bill sebesar Rp${price}`);
}

const onCoffeeOrderedListener = ({name, price}) => {
   makeCoffee(name);
   bill(price);
}

myEmitter.on("coffee-order", onCoffeeOrderedListener);
myEmitter.emit("coffee-order", {name: "Bali", price: 15000});