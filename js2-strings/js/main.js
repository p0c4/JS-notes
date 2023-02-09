// Strings
const myVariable = "Mathematics";


// Length property
console.log(myVariable.length);
console.log("Every good boy does fine".length);

//  String Methods

// Character at specific position
console.log(myVariable.charAt(0));
// first occurence Index for specific string
console.log(myVariable.indexOf("at")); 
//  Last occurence  index of specific string
console.log(myVariable.lastIndexOf("at"));

// Slice method
console.log(myVariable.slice(5,8));

// upper - lower  method
console.log(myVariable.toUpperCase());
console.log(myVariable.toLocaleLowerCase());

//  includes method return boolean, if includes true, if not false;
console.log(myVariable.includes("mat"));

// Split method
console.log(myVariable.split("e"));
console.log(myVariable.split(""));
console.log("John,Joe,Dave".split(","));

// For more information about strings in js;
console.log("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String");

const greeter = {
    message: "Say hi",
    times: 4
}

greeter.message = "Say hello instead"
console.log(greeter.message)