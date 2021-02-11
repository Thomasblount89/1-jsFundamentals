/*
    - an array is a container that holds a list of items
    - the items an array holds do not all have to be the smae daya type
    - denoted by []
    -
*/

let list = ['orange', 'banana', true, 5];
console.log(list[1]);// we have to use tjhe square brackets to grab what we want from the list

/*
    - when we reference an array , we can appemd square brackets onto the end of the referenced array, supply those square brackets with the index number we want to pull out
    - this is known as square bracket notation
*/

let students = [ 'adam' , 'alec', 'breyanna', 'conner', ['derek', 'elijah', 'garrett' ]];
/console.log(students[3]); // when you say student array you can pull our that entire item array so = 3 = conner

/*
CHALLENGE
************
    - dive into the nested array and pull the value 'Derek'
    - print out "Hello Derek!"
*/

//console.log(students[4]);
//let name =Derek 
//console.log(name[])

------
teachers attempt
console.log('hello' +  ' ' + students [4][0]);
// or 
let derek = students[4][0]
console.log(`Hello ${derek}`);
//-------------------

