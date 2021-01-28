/*
    Conditionals
        - a fasly value is a value that is considered false when encountered in a boolean context
            - there are falsy values in JS
                1. False
                2. 0 - zero will equate to false
                3. "", ' ' ,`` ( will come back as false
                4. null
                5. undefined
                6. NaN (Not a number)

*/
// if what we have put insdie the parathensis is true then run the body of the conditional. So true will cause true to print
if (true) {
    console.log('will it run');
}

let isOn = true;
if (isOn == true) {
    console.log('the light is on');
}
// anytime you use a variable use "let " to declare.... the rule is we can take
 isOn = false;
     if (isOn==false) {
    console.log('the light os on!');
}

let isOn = false;
if (isOn == false){
    console.log('the light is off!');
}

// JS allows us to reference a variable that's a;ready been declared and assign it a new value or reinitilize that variable), but we canmot declaretwo variables with the same name

//  - general rule of thumb:
//    - when declaring a new variable, the wariable name needs to be prefaced by one of our 3 available JS keywords t to declare a new variable (var , let , const)
// when assigned 

let (weather) = 65;

if weather < 70 {
console.log('wear a jacket');  //if 65 os less than 70 print run a jacket
}
// the basic statemnt for our if words is: if () { console}... keyWord () body ...
