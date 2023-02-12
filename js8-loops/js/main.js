// Loops

// while loops
let myNumber = 1;
while (myNumber <= 10) {
    console.log(myNumber);
    myNumber += 2;
}

//  do while loops
// main difference between do whle and while loops is 
// do block will happen at least once.
 do {
    console.log(myNumber);
    myNumber += 2;
} while (myNumber <= 10);


// for loops
for (let i=0; i <=10; i++) {
    console.log(i);
}

let name = "Poca";
for (let i = 0; i < name.length; i++) {
    console.log(name.charAt(i));
}

let counter = 0;
let myLetter;
while (true) {
    myLetter = name[counter];
    console.log(myLetter);
    if (myLetter === 'c') break;
    counter++;
}