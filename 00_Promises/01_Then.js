// computed instantly and result is stored in a 
const a = 2 + 1;

// computed when the function is called 
const b = () => (1 + 3);

b();

// Now Promise is like a 
const getMeAPromise = () => {
    // ... Your code goes here 
    // ... Let's assume this a some fetch from another server

    let data;
    data = fetch('./data.json');

    // This function will return data when server responds 
    return data;
}

// console.log(getMeAPromise()); // Prints the state of promise

// A promise can be in one of these three states :

//  Pending : Still waiting for the server to respond.
//  Rejected : Promise got rejected due to error or any other problem.
//  Resolved : Promise is fullfilled, everything went according to plan. 


// .then() is used to attach callback for reject or resolve promise 

// const promisedData = getMeAPromise().then(result => {
//     console.log(result);
//     return result;
// });

const promise = getMeAPromise();

console.log(promise) ; // Printed first 

promise.then(result => {
    console.log(result) ; // Printed Second 
});

// Even if we change the order of logs, the result will be printed after
// promise 

// promise.then(result => {
//     console.log(result) ; // Printed Second 
// });

// console.log(promise) ; // Printed first 