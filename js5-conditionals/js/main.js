// Conditionals:If statements

let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;

if (customerIsBanned) {
    reply = "No soup for you!";
} else if (soup && crackers) {
    reply = `Here's your order of ${soup} & crackers.`;
} else if (soup) {
    reply = `Here's your order of ${soup}`;
} else {
    reply = `Sorry, we're out of soup.`;
}
console.log(reply);


// Conditionals:Switch Statements

// syntax
switch (Math.floor(Math.random() * 5 + 1)) {
    case 1:
        console.log(1);
        break;

    case 2:
        console.log(2);
        break;
    // add as many cases as needed

    default:
        // run this code if no case matches
        // no need for a break here
        console.log('No match');
}

// rock,paper,scissors
let playerOne = "rock";
let computer = "paper";

switch (playerOne) {
    case computer:
        console.log('Tie game!');
        break;
    case "rock":
        if (computer === "paper") {
            console.log('computer wins!');
        } else {
            console.log('playerOne wins');
        }
        break;
    case "paper":
        if (computer === "scissors") {
            console.log('computer wins!');
        } else {
            console.log('playerOne wins');
        }
        break;
    default:
        if (computer === "rock") {
            console.log('computer wins!');
        } else {
            console.log('playerOne wins');
        }
        break;
}

// Conditionals:Ternary Operator

// syntax
// condition ? ifTrue : ifFalse;

let soupDay = "Chicken noodle soup"
let isCustomerBanned = false;
let response = soupDay ? "Yes, we have soup." : "Sorry, no soup today";
console.log(response);

// we can chain ternary operators
let soupAccess = isCustomerBanned ? "Sorry, no soup for you!"
    : soup ? `Yes, we have ${soup} today.`
    : "Sorry, no soup today.";
console.log(soupAccess);