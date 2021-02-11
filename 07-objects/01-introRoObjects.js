/* 
    - objects are used to store muliple sets of data in the key/value pair format
    - donated bt {}
*/

let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};


//console.log('All data:', netflix);
//console.log("Just season info" , netflix.season1.seasonInfo);
console.log()"specific episode Name:", netflix.season1.seasonInfo.episodeInfo[1].episodeName); //? not sure I did this right refer to notes 



//----challenge

/*
CHALLENGE
************
    - Pick an episode to console.log
    - Using dot notation, walk through the netflix object and print off both an episode number and an episode name.
*/

console.log()"Episode Number and Name:", netflix.season1.seasonInfo.episodeInfo[1]. episodeName[2]);//? not sure I did this right refer to notes 
// see teachers notes to replicarte his code


/*
    JSON
        - JSON stands for Havascript Object Notatopm
        - the JSON syntax is derieved from the JAvascript Object Notation, but JSON format is TEXT ONLY. 
        - JSON exists as a s string - useful when we want to fefetch data from the server , JSON objects need to be converted to a native Javascript object before we can access the data
        
*/     TEXT ONLY JSON



let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

// 
//console.log(Object.keys(spaceJam)); // object . keys method will return all keys from the past object in an array 
//console.log(Object.keys(spaceJam.toonsquad));
//console.log(Object.keys(spaceJam.toonsquad.duck));

console.log(Object.values(spaceJam.nbaPlayers));// object. values will return all key values from the refrenced object


