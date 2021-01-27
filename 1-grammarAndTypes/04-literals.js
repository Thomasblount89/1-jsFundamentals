/**
    Literals 
    -a literal represent a fixed value
    - literals include:
        string literal
        - numeric literal 
        - boolean literal
        - object literal
        - array literal 

        - literals are simply just values that we as developers add to our code
 */

 // string literal
 let car= 'ford';

 // numeric literal
 let december = 12;
 
 // boolean literal
 let tired = true;

 // object literal - inside of an object we DO NOT USE A EUQAL SIGN BUT A COOLEN.... so its key : value then "pair".... Colon after key assigns the value pair us seperated with a comma
 let soup = {
     a: 'chicken',
     b: 'tomato' ,
     c: ' beef and barley'
 }
 // dot notation- when working with obkjects , using dot notation allows us to dive into the
 console.log(soup.b);

 /*
    -when working with ibjects, using dot notation allows us to dive into the object and grab a specific place of data
 */


 // array literal
 let days = [ 'Monday', 'Tuesday' , 'Wednesday', 'Thursday', 'Friday'];
 console.log(days[2]);// square bracket notation
 console.log(typeof days);

 /*
    - when working with arrays, using square brackets notation allows us to pull a singular value out of the array by its index number
    - when working with indices, JavaScript will start counting from 0
    - when using the length property, JS will start counting from 1
 */

 console.log(days.lengrh); 