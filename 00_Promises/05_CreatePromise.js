var timer = document.querySelector("#time");

// setInterval(() => {
//     timer.innerText = new Date().toLocaleString();
// }, 1000);

// Creating a promise 

const createPromise = () => {

    const fn = (resolve, reject) => {
        // Do your computation/fetching/process here

        // If the computation was successful, resolve the result
        // Let's say result is data
        let data = 100;
        // Return data in rosolve 
        resolve(data);

        // Else if computaion failed, return the error in reject
        let err;
        reject(err);
    }

    // Create a promise 
    return new Promise(fn); // Pass a refrence or write a callback
};

console.log(createPromise());
// Prints the promise object with status fulfilled/ resolved

// Let's see a fetching example 
// const fetchPromise = () => {
//     return new Promise((resolve, reject)=>{
//         const data = fetch('./data.json');
//         resolve(data) ;
//     });
// };

// console.log(fetchPromise());

// Create setInterval Promise 
const setIntervalPromise = () => {
    return new Promise((res, rej) => {

        // Now we have created a promise and we need to add then to resolve
        setInterval(() => {
            timer.innerText = new Date().toLocaleString();
            res();
            rej();
        }, 1000);

    });
};

setIntervalPromise().then(() => {
    console.log('Time Checked');
}).catch((err) => {
    console.log("Something Went Wrong!", err);
})


// We can also simply create a resolve or reject promise 
function myPromise() {
    return new Promise.resolve(200);
    // return new Promise.reject(404) ;
};

myPromise().then((data) => {
    console.log("Resolved: ", data);
}).catch((err) => {
    console.log("Rejected", err);
})