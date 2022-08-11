import _ from "lodash";

const myOddEvenNumber = _.partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (n) => n % 2);
console.log(myOddEvenNumber);