// Numbers

const myNumber = 42;
const myFloat = 42.0;
const myString =  "42";

console.log(myNumber);

console.log(myString === myFloat);
console.log(myNumber === myFloat);

// Concatenate of string and number equal to string
console.log(myString + 3 === "423");

// Change the type of string to number with Number function
console.log(Number(myString) === myNumber);

// data cannot be turned into number gives a NaN=not a number
console.log(Number("myString"));

// Number.isInteger() method determines whether the 
// passed value is an integer
console.log(Number.isInteger(myString));
console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myFloat));

// Number.parseFloat() method parses an argument and returns a 
// floating point number. If a number cannot be parsed from the argument,
//  it returns NaN.
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat("12.237465abcsdjhfg34"));
console.log(Number.parseFloat("ajshdgajhdg"));

// The toFixed() method formats a number according to how many decimal
// points you provide as the parameter.
// ***returns a string
console.log(Number.parseFloat("12.237465abcsdjhfg34").toFixed(2));

// The toString() method returns a string representing the number.
console.log(myFloat.toString());

// Chaining = Using several methods chained together
console.log( typeof Number.parseFloat(myString));