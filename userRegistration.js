var read = require('readline-sync');

const REGEX_FOR_NAME = new RegExp("[A-Z]{1}[a-z]{2,}");
var firstName = read.question("Enter your First Name : ");

if(REGEX_FOR_NAME.test(firstName)){
    console.log("First Name entered successfully");
}
else{
    console.log("Invalid First Name");
}