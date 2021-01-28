/* 
    - Loops offer us a quick and easy way to do something repatedly

    - there are many kinds of loops, but they all essentially do the same thing: repeat until a specified  condition evaluates to false
            - for loops 
            - for-in-loops
            - for-of-loops
            - while loops 
            - do while loops 
            -labeled loops
            - break loops 
            - continue loops 

        NOTE: there is a danger of infinite loops** if this happens close Visual studio code and restart it 

        -for loops take in 3 required pearameters. (parameters are sepreated by a semi colon)
            1. initial expression
            2. condition
            3. increment expression
            these are the 3 things we put in the parathensis after the key word for
*/

for             (let i = 0 ;             i < 10; i++) {// ++ is the short hand for plus 1 
//key word      the condition            incement expression and increase it by one each time. its going to run until
        console.log(i); 

}

// teachers challenge

for ( let z = 0; z < 22; z ) {// this did not work you ran a continuous loop and had to shut it down... try again tonight 
    console.log(z)
}


// challenge: using a for loop, count from 10 down to 0
for (let i =10; i > 0; i--) {
    console.log(i)
}

/// C3

for (let i =0; i > -24; i-=2) {// note where was wrong
    console.log(i)
}
// teacher go 

for ( let i =0; i >= -24; i += -2){
    console.log(i)
}
// challenge 4 

 for (let myName = 'Spongebob';) { 
}
 // 

 for (let i=0; i < myName.length;i++) {
     let c = myName[i];
     console.log(i)
 }

 //challenge

// make a for loop where you add up all the numbers from 1 to 50 (should equal 1275)

for ( let i =0; i <= 50; i++) {
    console.log(i) 
}
    switch(true) {
        case (i +  && FB % 5 == 0):
            console.log('FizzBizz');
                break;
}
//teach 

let answer = 0;

for (let i = 1; i <= 50; )