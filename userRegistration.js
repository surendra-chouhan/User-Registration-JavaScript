var read = require('readline-sync');

const REGEX_FOR_NAME = new RegExp("[A-Z]{1}[a-z]{2,}");
const REGEX_FOR_EMAIL = new RegExp("^[a-zA-Z0-9]+(?:[\\+._-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]{1,}(?:\\.[a-zA-Z]{2,5})?(?:\\.[a-zA-Z]{2,5})?$");

var firstName = read.question("Enter your First Name : ");
if(REGEX_FOR_NAME.test(firstName)){
    console.log("First Name entered successfully");
}
else{
    console.log("Invalid First Name");
}

var lastName = read.question("Enter your Last Name : ");
if(REGEX_FOR_NAME.test(lastName)){
    console.log("Last Name entered successfully");
}
else{
    console.log("Invalid Last Name");
}

var email = read.question("Enter your Email ID : ");
if(REGEX_FOR_EMAIL.test(email)){
    console.log("Email added successfully");
}
else{
    console.log("Invalid Email")
}