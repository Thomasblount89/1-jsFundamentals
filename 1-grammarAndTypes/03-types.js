/*
Booleans: has only two possible values TRUE or FALSE
*/
let on = true;
console.log(on);
let off = false;
console.log(off);
/*
NULL: null is an empty value. It is an empty container. Nothing is in it, still exists as a space to fill
*/
let empty = null;
console.log(empty)
/*
UNDEFINED: no value is assigned and does not act as an empty container
*/
// let undef;
let undef = undefined;
console.log(undef);
/*
NULL vs UNDEFINED:
Null:
    - Null is like container with nothing in it
    - Undefined is when a variable has never been initialized, or hasn't been created yet.
    think of variables with null and undefined as packages coming out of UPS
    Null packages are packages that were intentionally packed up with nothing, but have been assembled
    Undefined packages are basically boxes that need to be assembled and given something to ship.
 */
/*
NUMBERS: numbers are literally just numbers. Don't need to write anything special in JS.
*/
let degrees = 90;
console.log(degrees)
let precise = 999999999999999 //15 9s
console.log(precise); // 15 9s
const rounded = 9999999999999999
console.log(rounded); //16 9s: JS gives you space for 15 9s before it rounds up
let notQuite = 0.2 + 0.1;
console.log(notQuite); //JS rounds out at a certain number. so if math is needed beware!
let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10
console.log(numbersAreHard)
/*
STRINGS: strings are a DataType to represent text and are wrapped in a single quote ('') or double quotes (" ")
*/
let stringOne = "Oh hi Mark";
let stringTwo = 'Oh hi Mark';
console.log(stringOne, stringTwo); //same output
//Numbers vs Strings
let first = 1050 + 100
let second = '1050' + '100' //String Concatenation
console.log(first); //number
console.log(second); //string
/*
OBJECTS: are used to store many values instead of a singular value
   -denoted by {}
*/
let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true
}
console.log(frodo);
console.log(typeof frodo)
/*
ARRAYS: are containers that hold lists of items
    -denoted by []
    - don't have to be the same dataType
 */
let list = ['item1', undefined, 3]
//  (1)    (2)             (3)
/*
1. name of the array or list;
2. array's use square brackets
3. each item, regardless of dataType, and is separated by commas
*/
let burritos = ['large', 4, true]
console.log(burritos);
console.log(typeof burritos)
 //Arrays are also containers that can hold multiple dataTypes. So JS has classified arrays as objects and not it's own dataType.

/*
- when JS sees that we're trying to combine two or more numbers, it adds the values together using the built in math functionality
- when JS sees us trying to add together one or more strings, instead of using the built in math functionality, it combines the two strings instead without synthesizing the values. 
- 
*/

let example = 1050 + '100'; // coersion JS assumes that the user made a mistake and that we're trying to concentrate two strings instead of trying to do math with the values 
console.log(example);
console.log(typeof example);

/*
    Challenge:
    Set 7 (or 8) variables:
    
    // notes to thomas, when doing this challenge and js in general " kick all things off with LET ( the name you wanna assign) = the info your trying to get out... then you wanna add the data up at the end with a console.log"*/

    /*
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/


-------------------------------

let firstName = 'thomas';
let lastName= 'blount';
let houseNumber= 12606;
let street = 'markay';
let city = "indy";
let state =  "indiana";
let zipcode = '46038';

console.log(firstName, lastName + ',', houseNumber, street + ',', city + ',', state, zipcode); // string concatenation
console.log('$[firstName} ${lastName}, ${houseNumber}, ${street}, ${city}, ${state}, ${zipcode}');// string interpolation

/*
Sting Properties     
- properties are qaulities that are associated with a datatype

*/


let myName = "Thomas";
console.log(myName.length); //6 

/*
    string Methods
     - methods are tools that help us manipulate the data
        - .properties / .methods () // 
         * no parethensis for properties *

*/

let myNameIs = 'Thomas';
console.log(myNameIs.toUpperCase());// method that changes a string to a upperCase


let hometown = 'my home town is morganfield'
console.log(hometown.includes('morganfield')); // method that checks ifa certain string is included in another string. Is case sensitive 


// Challenge: Use google, find MDN documentation for Strings, research and use the split method to get an array back from this string

let sent = 'This sentence will be split into individual parts';// Thomas' attempt. ( teacher took us to: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice        ( we looked at the methods parameters and the limits etc)    W3 shools is simplifed alternative 
console.log(sent.)

// use javascript key word and use the words- MDN and string methods= be specific = also check out the methods on the left of page... we were looking for split method

let sent = 'This sentence will be split into individual parts';
console.log(sent.split());// this will execute anything that is in the parathesis. If you add quotes it will execute what you put or do not put in quotation marks . 

