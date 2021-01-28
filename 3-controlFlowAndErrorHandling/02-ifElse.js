let weather = 55; // if the if is not true then else will run all things after that

if (weather < 70){
console.log('wear a jacket');
}else {
console.log('no jacket necessaery');
}

/*
CHALLENGE
************

    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'

    Silver:
    If It is your name, console log 'Hello, my name is <name>'

    Gold:
    If it is not your name, console log 'Hello, is your name <name> ?'
*/

let myName = 'Thomas';

if (myName ='Thomas'){
    console.log('Thomas')
} else { 
    console.log('Hello, what is your name?');
}

let myName = 'Thomas';

if (myName ='Thomas'){
    console.log('Hello my name is Thomas')
} else { 
    console.log('Hello, what is your name?');
}

//-----------------------------------------------------------------------

let myName = 'Thomas';

if (myName =='Thomas') {
    console.log( myName)
} else { 
    console.log('Hello, what is your name?');
}

 
let myName = 'Thomas';

if (myName =='Thomas'){
    console.log(' Hello my name is', myName)
} else { 
    console.log('Hello, what is your name?');    
}

let myName = 'Thomas';

if (myName ==='David') {
    console.log(' Hello my name is', myName + '!');
} else { 
    console.log('Hello, is your name ${myName}?');    // string interpolation
}

/*
CHALLENGE
************
    Use this string: let name = 'zAchARy';
    Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'

    Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string without the first letter, and change them to lowercase

    Gold:
    If the first letter of a string is uppercase, console.log that first letter of the string, plus the rest of the string to lowercase
    If the first letter is not uppercase, console.log the first letter of the string to uppercase, plus the rest of the string to lowercase
*/

//silver group attempt

let firstName = 'zAchARy';

let res = firstName.charAt(0);
if (res.toUpperCase()){
    console.log(res);
}else {
    ()
}

/// teachers attempt
let myName = 'zAchARy'
console.log(myName.charAt(0))//9 we are trying to isolate one letter of the string example of one way to do it
console.log(myName[0]);// example to another way to do it      // run and see if you get Z

if ( myname[0] == myname[0]. toUpperCase()) {
console.log(myName);
}else {
console.log("hey,this isn't written correctly");
}

//silver ( incomplete need to redo)
let myName = 'zAchARy'
console.log(myname)

if ( myname[0] == myname[0]. toUpperCase()) {
console.log(myName);
}else {
console.log("hey,this isn't written correctly");
}

// gold challenge teachers attempt

let myName = zAchARy; // statement - we are statting that the vairable of myName has a value of xachery'

if(myName[0] == myName[0].toUpperCaase()) {
let isUppercase = myName[0] + myName.slice(1).toLowerCase(); // expression - any value of code that resolves to a value
    console.log(isUpperCase);
}else {
  let notUpperCase = myname.charAT(0).toUpperCase() + myName.substring(1).substring.toLowerCase();
  console.log(notUpperCase);
}


// else if -------- session 3 of the day 

/*
CHALLENGE
************
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/


//-------- my attempt- found code for how to else if online
let age = 28;
if ( age => 17 ) {
console.log("sorry, you're too young to do anything.");
} else if (age < 18) {
console.log("you can vote");
} else if (age < 21) {
    console.log("you can drink");
} else { (age < 25) {
    console.log("you can rent a car");
} else {

}
//--------------------- teachers attempy

let age = 28;

if (age <= 17) {
    console.log("sorry you are to young to do anything");
}else if (age >= 18 && age <=20){
    console.log('you can vote');
else if (age )
}

// correct structure
let age = 28;
if (age <= 17) {
    console.log('sorry, you\'re to young to do anything.');
} else if (age >= 18 && age <= 20) {
    console.log('you can vote');
} else if (age >= 21 && age <= 24) {
    console.log('you can drink');
} else if (age >= 25) {
    console.log('you can rent a car');
} else {
    console.log(age);
}
// correct structure
let age = 20;
if (age >= 25) {
    console.log("Yay! You can rent a car!");
} else if (age >= 21) {
    console.log("Yay! You can drink!");
} else if (age >= 18) {
    console.log("Yay! You can vote!");
} else {
    console.log("Sorry, you're too young to do anything fun.");
}
// incorrect structure
let age = 30;
if (age >= 18) {
    console.log("Yay! You can vote!");
} else if (age >= 21) {
    console.log("Yay! You can drink!");
} else if (age >= 25) {
    console.log("Yay! You can rent a car!");
} else {
    console.log("you're too young to do anything fun")
}