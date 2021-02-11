/* 
    - for each () method
    - the foreach () method executes s function once for each element in an array
    - the foreach () method essentially does the same thing as a for loop 

*/ 

let food = ['pecan pie', 'shrimp' , 'quesadilla', 'cheese cake', 'hotdog'];
console.log( food.length);

// regular for loop
for (let i = 0 ; i <food.length; i++) {
    console.log(food[i]);
}

// for each method... - simply attach the action to the word with a period in between, just like in methods

food.forEach(function(foodItem) {// missed final step, here refer notes later

})

/*
CHALLENGE
************
    - (Go look at MDN docs if you need a reminder):
    - Create an array containing movies
    - Use the .forEach() method to list your movies
    - Add another movie at the end of the array
    - And replace one of your existing movies with another one
*/


let movies = ['brave heart', 'Troy', 'Elf' , 'Toy' ];
movies.forEach(function(movies) {
    console.log(movies);
}) 

//movies.push('Aladdin' ,);
//console.log('push' , movies);

//movies.splice (1, 1, 'Jumanji' );
//console.log('splice' , movies );

//-----teacher attempt

movies.forEach(movies => console.log(movies)); // re,e,ner yjsy [stsyjrdod str mpy mrrfrf ejrm pm;i s domg;r [sts,ryrt od [ptdrmy ejrm eptlomh eoyj ]]]

movies.push('force awakens');
movies.splice( 3, 1, 'The return of Skywalker'); 



