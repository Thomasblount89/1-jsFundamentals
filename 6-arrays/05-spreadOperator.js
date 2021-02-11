/*
    - the spread operator us denoted by ...
    - the spread operator pulls out all the elements of an array and gives them back to us as a  standlone list of items. 

*/

//     INCORRECT SYNTAX

// let fullName = [ 'Spongebob' , 'Squarepants']

// // INCORRECT sYNTAX
// // ...FULLNAME // 'Spongebob', Squarepants'

// //  correct syntax 
// let copiedFullname = [...fullName];
// console.log(copiedFullname);

// let copiedFullName = [fullname];
// console.log(copiedFullName); // notice this pulled in the whole square bracket  becasue we did not use three dots. 

/*
    - one of the advantages of the spread operator is that if we decided we want or need to add another value to our oringal array, we cando that without altering our copied array. Keep in mind this is dependant on what data types we're working with.

*/

// fullName.push('Mr');
// console.log(fullName, copiedFullName);

// SPREAD OPERATOR AND NUMBERS 

//  Javascript has its own global math object that has its own bult in methods 

//  math.min looks at a list of intergers and returns the smallest value
console.log(Math.min([1, 5, -3]));

const price = [10.99, 5.99, 3.99, 7.50];
console.log(Math.min(prices)); // incorrect
console.log(Math.min(...prices));


// SPREAD OPERATOR AND OBJECTS
 let persons = [{name: 'Zac', age: 27, { name: 'Donovan' , age: 25}];
//  let copiedPersons = [...persons];
let copiedPersons = persons;

//   console.log(persons, copiedPersons);

// persons.push({name: ' Anna' , age: 29});
copiedPersons.push({name: ' Anna' , age: 29});

console.log(persons, copiedPersons);


/*
    - JS has S data types that are passed by value:  boolean, null, undefined, string and number. There are knwn as primitive data types
        - if a peimetive data type is assigned to a varaible , we can think iof that varuable as a containing a orimitive value

        let x = 10; 
        let y = 'abc'
        let z = null;

        - when running the code , JS stores these varaibles , and these variuables and their respective values to memory 

        VARIABLES   VALUES
        x           10
        y           'abc'
        z           null
// now  a           10
// now  b           'abc'

                    - when we assign these variables toanother variable using =, we copy the value to the new variables - they are copied by value since they are primitice data types


                    let a = x;
                    let b = y;
                    - JS jas 3 data types that are passed bt refernce: array, function, and object. 
                        - variables that are assigned a non primitive value are given a reference to that value. The reference points to that objects location un memory. The variable dont contaointhe absolute values. 
                            - objects are created a klocation on upit conputers memory. We write Let arr = [ ], we created an array in our computers memory. When the variable arr recieves as its value , instead of a primitive absolute value, is the addewss ( the location), of the array and where its stored i nthe memorey 
                            - when we assign a non primitive data type to variable, what we write and see is:

                            Let arr = [];
                            arr.push(1);

                            - a represenation of the above code in memory would look like this:

                            Variable    Value   Address     Object
                            arr         <#001>  #001        []      //before push
                            arr         <#001>   #001        [1]    // after push
                            
                            
                            - notice that the value , that points to the address of oir aray, which is contined by the vairables of arr is stgatic. The arraay in memory is what chamges. When we reference the variable arr to do something, like pushing a new value, the JS engine goes to the location of arr in memory and works with the information that is stored there.

                            - when a reference type value (array, object, function) is copied to another varaiaable using #, the address of that variable is what's actually copied over as if it were primitive. Arrays, objects and functions are copied by reference instead of by value

                            Let reference = [1];
                            Let refCopy = reference;

                            the above code looks like this in memory:

                            Variable    Values  Address    Object
                            reference   <#002>  #002        [1]
                            refCopy     <#002>

                            - each variable now contains a reference to the same array. That means that if we akter reference, refCopy will also see those changes - and visa versa



    */


   let persons = [{name: 'Zac', age: 27}, { name: 'Donovan' , age: 25}];
   let copiedPersons = [...persons];

   persons.push({name: 'Anna', age: 29});

   // copiedPersons[0].name = 'Zachery';
   copiedPersons[0].name = 'Zachery';

   console.log(persons, copiedPersons);

   // Spread OPERATOR AND AVOIDING CHAGIMG BOTH THE ORGINAL AND COPIED ARRAY
   let persons = [{name: 'Zac', age: 27}, { name: 'Donovan' , age: 25}];
   // if you want to avoid changining both your orignal and copied array, you would also have to cipy every object
   let copiedPersons = persons.map(person => ({
       name: person.name,
       age: person.age
   }))// since were returning something in curly breaces, we have to enclose the callback function body in parens so JS doesnt mistake ot for the arrow functions body

   persons.push({name: 'Anna' , age: 29});
   copiedPersons[0].name = 'Zachery';

   console.log(persons, copiedPersons); 

   /*
   - since we are mapping our oringal array, and then creating new objects witrh the values from person, those new objecrts will have their own address to where they are stored in memory
   - geenreal rule of themb: only copy whawt you plan on changing!
    */
