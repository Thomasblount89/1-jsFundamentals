/*
- for in loops are hreat for lopping values in an object
    - propertiies ( or key value pairs ) in an object are lnown as enumerable properties
    - for in loops will loop over the enumerablr properties pf an object 

        - enumerablr simply means ' countable '
    
*/

/*
    - for in loops are great for looping over values in an object
        - properties (or key value pairs) in an object are known as enumerable properties
        - for in loops will loop over the enumerable properties of an object
        - enumerable simply means 'countable'
*/
let student = {
    name: 'Peter',
    awesome: true,
    degree: 'javascript',
    week: 1
} // all keys in objects are strings by default
// console.log(student.name); // dot notation
// console.log(student['name']); // object bracket notation
for (let item in student) {
    console.log(item);
    // console.log(student[item]);
}
let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
console.log(catArray[0]);
for (let cat in catArray) {
    console.log(cat);
    console.log(catArray[cat])
}
/*
CHALLENGE
************
    - write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name
*/
let myName = 'sPonGeBoB';
let capName;
for (let i in myName) {
    console.log(i);
    if (i == 0) {
        capName = myName[i].toUpperCase();
    } else {
        capName += myName[i].toLowerCase();
    }
}
console.log(capName);
}// all keys in objects are strings by defualt


console.log(student.name); // dot notation
console.log(student['name']);// object bracket notation
// how we write a forin loop 


for (let item in student ){
    console.log(item);
    console.log(student[item]);
}

// array example

let catArray = ['tabby' , 'british shorthair', 'burmese' , 'maine coon' , 'rag doll'];
// test the index to srr if you can get one identified in your brackets above, then see how you can do that in the group
//console.log(catArray{0});

for (let cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}

/*
CHALLENGE
************
    - write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name
*/

  let myName = 'tHOMAS';

  if ( myName[0] == myName[0].toUpperCase()); {
    console.log(myName);
    
for (let =tHOMAS); 
// teachers approach - i need to fix code here and retype out so that all lights up correctly below

let myName = 'tHOMAS';
let capName;

for ( let i in myName) {
    console.log(i);
    if (i == 0){
        capName = myName[i].toUpperCase();
    } else { 
            capName += myName[i].toLowerCase();
    }
// real class notes below

/*
    - for in loops are great for looping over values in an object
        - properties (or key value pairs) in an object are known as enumerable properties
        - for in loops will loop over the enumerable properties of an object
        - enumerable simply means 'countable'
*/
let student = {
    name: 'Peter',
    awesome: true,
    degree: 'javascript',
    week: 1
} // all keys in objects are strings by default
// console.log(student.name); // dot notation
// console.log(student['name']); // object bracket notation
for (let item in student) {
    console.log(item);
    // console.log(student[item]);
}
let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
console.log(catArray[0]);
for (let cat in catArray) {
    console.log(cat);
    console.log(catArray[cat])
}
/*
CHALLENGE
************
    - write a for in loop that capitalizes the first letter of a name, and lowercases the rest of the name
*/
let myName = 'sPonGeBoB';
let capName;
for (let i in myName) {
    console.log(i);
    if (i == 0) {
        capName = myName[i].toUpperCase();
    } else {
        capName += myName[i].toLowerCase();
    }
}
console.log(capName);
