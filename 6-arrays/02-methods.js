let food = ['pecan pie', 'shrimp' , 'quesadilla', 'cheese cake', 'hotdog'];

// push - allows us to add one or more methods to an array
food.push('pizza'); 
console.log('push:', food);

// splice - allows us to remove, replace, or add new elements to the array

food .splice(4, 1)// to start in the perenthesis you must select the index (4 hot dog) and then selcet how many things you want to remove from the entire array... 1.( hot dog)
console.log('splice' , food);

// aplice add a value below

food.splice(2, 0, 'lolipops');
console.log('splice 2:',  food);     


// popp - allows us to remove the last item of an array
food.pop();
console.log('pop' , food);


// shirft - 
food.shift();
console.log('shift' , food)

// unshift - allows us to add one or more items to the begining of an array

food.unshift('popcorn', 'steak');
console.log('shift' , food);

