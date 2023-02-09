// Math Methods and Properties

console.log(Math.PI);
// truncate the decimals
console.log(Math.trunc(Math.PI));
// round to the closest whole number
console.log(Math.round(Math.PI));
// round to the upper whole number
console.log(Math.ceil(Math.PI));
// round to the lower whole number
console.log(Math.floor(Math.PI));

// powers to the first number
console.log(Math.pow(2, 10));

// return the min number
console.log(Math.min(2, 5, 7, 10));

// return the largest number
console.log(Math.max(2, 5, 7, 10));

// return random number between 0 and 1, including 0 not including 1
console.log(Math.random());

// return random number between 1 and 10
console.log(Math.floor(Math.random() * 10) +1);

const myName = "Hatice"
let randIndex = (Math.floor(Math.random() * myName.length));
console.log(myName.charAt(randIndex));