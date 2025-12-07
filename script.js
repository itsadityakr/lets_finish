// async
// <script type="module" src="script.js"></script> because in common js we get error
// Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules

// to use await u always need to have async function but not true for always below code is not for learning just an analysis
// var blob = await fetch("https://randomuser.me/api/");
// var response = await blob.json();

// console.log(response);
//{results: Array(1), info: {…}}

// Syncronous Function => line by line code executions like line 1->2->3->4.... means sequenctially is known as syncronous functions
// Asyncronous Function => are those which are send to side stack and execute the code that is of sync nature, whenever when ever all sync code is executed and main stack gets empty then check if async code is completed or not. if completed then bring it to main stack and execute

async function abcd() {
    // await fetch(`https://randomuser.me/api/`);
    //fetch is by default asyncronous in nature means it never blocks the code

    var blob = await fetch(`https://randomuser.me/api/`); //the fetch geenrate a response in a form of unreadable stream so we use blob.json to convert it into readable format
    // var ans = blob.json();
    // console.log(ans);
    // Promise {<pending>} because fetching takes some sort of time and before that this line executed so we need to add await to it.
    var ans = await blob.json();
    console.log(ans);
    // {results: Array(1), info: {…}}
    console.log(ans.results[0].name);
    // gives name {title: 'Mrs', first: 'Ece', last: 'Adan'}
}

abcd(); // calling function
