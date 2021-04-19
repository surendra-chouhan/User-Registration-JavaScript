var read = require('readline-sync');

const REGEX_FOR_NAME = new RegExp("[A-Z]{1}[a-z]{2,}");
const REGEX_FOR_EMAIL = new RegExp("^[a-zA-Z0-9]+(?:[\\+._-][a-zA-Z0-9]+)*@[a-zA-Z0-9-]{1,}(?:\\.[a-zA-Z]{2,5})?(?:\\.[a-zA-Z]{2,5})?$");
const REGEX_FOR_PHONENUMBER = new RegExp("^[0-9]{2}[ ][0-9]{10}$");
const REGEX_FOR_PASSWORD = new RegExp("^(?=.*[A-Z]).{8,20}$");

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

var phoneNumber = read.question("Enter your Phone Number : ");
if(REGEX_FOR_PHONENUMBER.test(phoneNumber)){
    console.log("Phone Number added successfully");
}
else{
    console.log("Invalid Phone Number");
}

var password = read.question("Enter your Password : ");
if(REGEX_FOR_PASSWORD.test(password)){
    console.log("Password added successfully");
}
else{
    console.log("Invalid Password");
}