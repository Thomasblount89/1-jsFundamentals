/* 
    scope is how a computer keeps track of all variables and functions in a program
        - globally scope: are global scops that are available througput the entirety of the application 
        - local scope: only available within the scope they were created in - so not availble globally
( this is how scope is ran behind the scenes)
*/

let x = 12 ;

function scope() {
    // what is inside of the curly craces or the body of our function is a local scope... thats why 33 runs first
    let x = 33;
    console.log(x);
}

scope();
console.log(x);



// we can accress a global scope variable with in a local scope
let y = 12;

function scopeTwo() {
    y = 33;
    console.log(y;)
}

scopeTwo(();
console.log(y);

// we can not accessa local scope vairable in a globally scope document



function scopeThree() {
  let z = 4;
    console.log(z);

}
scopeThree();
console.log(z);


/*
    const - const varabiles are variables that cannot be initialzed, their values are contstant 

    - (var) and (let) seem to operate the same and share functionalities (they both allow us to declare and initialize variables), but they also have qualireis that make them behave different from one another
        - the var key word is scopeed to the nearest function block
        - the let key word is scopped to the nearest enclosing block
*/

// var
var x =  12;
function varTest() {
    var x = 33;
    if (true) {
        var x = 45;
        console.log(x);//  x variable that's locally scoped to the if
    }
    console.log(x);// x variable thats locally to the function
}

varTest();
    console.log(x); // x varaible thats scoped globally

    //let 

    let y = 12;

    function letTest() {
        var y = 33;
        if(true) {
            let y = 45;
            console.log(y);
        }
    console.log(y);

        console.log(y);
    }
    letTest();