// Functions

// Methods = Built-in Functions!
"Poca".toLowerCase()

// Function Declaration Syntax
function sum(num1, num2) {
    return num1 + num2;
} 
console.log(sum(2,6));

function getUserNameFromEmail(email) {
    return email.slice(0,email.indexOf("@"));
}

// Another way of declare a function
const getUserNameFromEmail2 = function (email) {
    return email.slice(0, email.indexOf("@"));
}
// arrow function
const getUserNameFromEmail3 = (email) => {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("poca1@email.com"));
console.log(getUserNameFromEmail2("poca2@email.com"));
console.log(getUserNameFromEmail3("poca3@email.com"));

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLocaleLowerCase()
};
console.log(toProperCase('pocA'));