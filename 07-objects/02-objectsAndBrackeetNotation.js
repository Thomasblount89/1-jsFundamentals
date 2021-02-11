/*
    - object brackets notation []  can also be used to reference or pull values out of an object
    - when accessing keys in an object , you will use dot notation most of the time- but there are some use cases as to why we would want/need to use object bracket notation instead

    - REMINDER ALL KEYS IN PBJECTS ARE STRINGS
*/

let garden = {
        vegetable: 'zuvvhini',
        flower: 'sun flower' , 
        fruit: 'grape' ,
        water: true ,
        sun: true, 
        size: 10
}

let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);

console.log( garden.vegetable); // standard dot notation

let zucchini = garden['vegetable'] // object bracket notation
console.log(zucchini);
/**
    - we cam access keys in an object by specifying the name of the object followed by a set asquare brackets containing the key name that we want to reference. The key name that we [ass into the square brackets needs to be  wrapped in a set of quotes since all keys inside of objects are strings. 

        we can also use object bracket notation to set key/ value pairs in an object
   */
  
   let baking = {}; 
   baking [ ' Zucchini '] = 'better make some bread!' ;
   console.log(baking) ; 
    }
                    baking 'zucchini'
    console.log (baking['vegetables']]);

    // garden['vegetable'] = 'zucchini' 

    let testOBj={
        "spaces here": true, 
        noSpaces: true
    }

    console.log(testOBj).noSpaces0;
    console.log(testOBj) ["spaces here"]);