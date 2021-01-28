/*
    - switch statemnts execute a vlock of code when a 'case is evaluated as true
    - the switch statement often incorperates the 'break keyword, as well as the 'default keyword - although both keyword - althoygh both keywords are optional 
        - the break keyword breaks out of a case evaulated as true. this will stop the execution of more cases from being tested. If the break keyword the nect case in the switch statement will be eveualted.
            - defualt keyword specifies code to run if none of the casers evaluate as true. There can only be one defualt keyword in a swwitch statement

*/

let officeCharacter = "Jim";

switch(officeCharacter) {
    case "Michael":
        console.log('My mind is going a mile an hour');
         break;
    case "Dwight":
        console.log('perfectenschlag');
        break;
    case "Jim":
            console.log('bears, beats, Battlestar Galactica');
            break;
    default: 
        console.log(`I'm sorry, ${officeCharacter}, do I know you`);
}