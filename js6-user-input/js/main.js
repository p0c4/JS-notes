// User Input

alert("Hello world");

// confirm()
let myBoolean = confirm("Ok === True\nCancel === False");
console.log(myBoolean);

console.log(confirm());

// prompt()
let name = prompt("Please enter your name.");
if (name) {
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
} else {
    console.log('You did not enter your name.');
}

