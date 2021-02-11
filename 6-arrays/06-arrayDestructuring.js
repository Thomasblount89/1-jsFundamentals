/*
    - array destructuring allows us to unpack values from array, or even properties from objects. into their own distinct variables
    -destructuring uses very similar syntax as array :iterals , but is instead on the left hand side of the assignment operator, which is where we deine what values to unpack frim the sourced variable

    - great for pulling information out of an array/object and assigning that data to its own variable

*/
// ARRAY DESTRUCTORING 
let fullname = ['Patrick' , 'Star'];

let firstName = fullName[0];// these correct below is a short cut
let lastName = fullName[0];

let [ firstName, lastName] = fullName;
console.log(firstName);
console.log(lastName);
// what you inckude in the square brackets on the left hand side of the assignment operator are variable names for the elements in the array on the tight hand side of the assignment operator


/*
REST SYNTAX
        - rest syntax looks exactly like the spreas syntax
            - its denoted by ...
        - rest syntax is essentially the opposite of the spread syntax. Spreaad syntax ' expands' an array into a list of comma seperated items while rest syntax collects multiple elements and 'condenses' them into a single element
*/

let fullName = [' THomas', 'Blount' , 'Mr', {month: 12, date: 18, year: 1992}];

//  we can use the rest syntax when working with array destructuring to package up the REST of the values in the referenced array, and return them as their own array

let [firstName, lastName, ...otherInfo] = fullName;

console.log(firstName);
console.log(lastName);
console.log(otherInfo);


// values can also be skipped or ommited if we dont want to assign them to a varaiable when working with array destructuring

let fullName = [' THomas', 'Blount' , 'Mr', {month: 12, date: 18, year: 1992}];
fullName.push('testOne', 2, 'testTwo', 4, true, false);

let [firstName, lastName, , ,...otherInfo] = fullName
console.log(firstName);
console.log(lastName);
console.log(otherInfo);

// the rest syntax always has to be the last item we place when using array destructuring

/*
OBJECT DESRTUCTURING
*/

    let user= {
        username: 'testuser',
        is_verified: true
    };

    let { username, is_ verified} = user;\
    console.log(username);
    console.log(user)

}


const metadata = {
    title: 'Scratchpad',
    translations: [
        {
            locale: 'de',
            localization_tags: [],
            last_edit: '2014-04-14T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            title: 'JavaScript-Umgebung'
        }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
};

let{
    title: englishTitle, // renamed variable
    translations: [
        {
        title: localeTitle // renamed variable
        }
    ]
} = metadata;

console.log(englishTitle);
console.log(localeTitle);
// recognize rthat we are not changing the variable we are simply diving into the data and assigning varaible names so we can apull out specific tbings 


const people = [
    {
        name: 'Mike Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harry Smith',
            sister: 'Samantha Smith'
        },
        age: 35
    },
    {
        name: 'Tom Jones',
        family: {
            mother: 'Norah Jones',
            father: 'Richard Jones',
            brother: 'Howard Jones'
        },
        age: 25
    }
];

for (let { name: n, family:{ father: f   }  } of people){
    console.log (`Name: ${n}, Father: ${f}`);
}







