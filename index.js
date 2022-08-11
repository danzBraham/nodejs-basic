const message = name => {
   console.log(`Hello ${name}, welcome to JavaScript!`);
}

message("Zidan");

const cpu = process.memoryUsage();
const pwd = process.env.PWD;

console.log(cpu);
console.log(pwd);

const first = process.argv[0];
const second = process.argv[1];
const third = process.argv[2];
const fourth = process.argv[3];

console.log("\n");
console.log(first);
console.log(second);
console.log(`Halo ${third} ${fourth}`);