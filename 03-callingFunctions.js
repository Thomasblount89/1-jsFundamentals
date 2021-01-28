function hello(){
        console.log('hey there');
}

//hello(); // correct
//hello// no parathensis means the function will not run
//consile.log(hello);
console.log(hello());// function invocations happen immediately - in this case, our function of hello is running before the console.log statement, leaving us with an empty consile.log preinting undefined

/*
CHALLENGE
************
    - Create a function that, when invoked, lists out the numbers 1-10
*/

function numbers(){
  for ( let num = 0; num <= 11; num++);
  numbers()(num);
  
}
//---------------------------------------- teach below

function listThem() {
    for(let i = 1; i<= 10; i++) { 
        console.log(i)
    }
}
s
listThem();
//---------------- challenge 2 

/*
CHALLENGE
************
    - Given the array, create a function that lists out the values individually.
*/

function read(){
    let arr = ['This', 'is', 'really', 'cool'];
for ( let names =[0,1,2,3]);
        console.log(names).string 
}
function read()

// ----------- teachers example

function print() {
    for( let word of arr); { 
        console.log(word);
    }
}