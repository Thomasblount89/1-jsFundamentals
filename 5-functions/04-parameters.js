
/* 
    - placeholders for information that will pass into our function
    - parametes are placed inside of the parenthesis 
    // must have a parameter name to call the function
    the argument is the absolute data value that we want to send to our function. 
    - parameters are seperated ny a comma
*/

//              ticket = "chesse pizza"
function thomas(ticket) {
    console.log(`I exchanged my ticket for a ${ticket}`);
} 

thomas('cheese pizza'); // cheese pizza is the argument

//

let resource = "|==========|";
//                  ironrod = '/========/' 
function machine(ironrod) {
    console.log(ironrod);
}

machine(resource); // argument

/*
CHALLENGE
************
    - Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - declarae a new varaible that conbines the first name and last name parameters
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/

function testFn (fname, lName) {
    let fullname = 'fname +' '+ lName';
         console.log( `Hello, my name is ${fullname}.`);
}

testFn( 'Guy',"Fieri"); 