/* 
    - whereas for in loops look at enumerable properties, for of loops look at iterable properties
        - iterable meaning: able to parse through with numbers

        - for of loops are best suited for working with arrays

*/
// below code does not work because object codes are not enumerable, not iterable
let student = {
    name: 'Peter',
    awesome: true,
    degree: 'javascript',
    week: 1
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (let cat of catArray) {
    console.log(cat, 'says ,meow');
}

