// const message = name => {
//    console.log(`Hello ${name}, welcome to JavaScript!`);
// }

// message("Zidan");

// const cpu = process.memoryUsage();
// const pwd = process.env.PWD;

// console.log(cpu);
// console.log(pwd);

// const first = process.argv[0];
// const second = process.argv[1];
// const third = process.argv[2];
// const fourth = process.argv[3];

// console.log("\n");
// console.log(first);
// console.log(second);
// console.log(`Halo ${third} ${fourth}`);

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const people = ['Arthur', 'Dutch', 'John'];
      // const people = null;
      if (!people) reject(new Error('No people'));
      resolve(people);
    }, 3000);
    console.log('Read Dead Redemption 2');
  });
}

getUser()
  .then((people) => console.log(people))
  .catch((err) => console.error(err.message));
