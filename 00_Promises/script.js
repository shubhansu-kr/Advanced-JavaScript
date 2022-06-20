// Paste Your Code Here to Run. 


// 00_Intro.js
var minute = document.querySelector("#minute");
var seconds = document.querySelector("#seconds");
var milisec = document.querySelector("#milisec");

var start = document.querySelector("#start-button");
var pause = document.querySelector("#pause-button");
var reset = document.querySelector("#reset-button");

let isStarted = false, isPaused = true;
let count = 0;

let minuteCount = 0, secondsCount = 0, milisecCount = 0;

start.addEventListener("click", () => {
    isStarted = true;
    isPaused = false;
});

pause.addEventListener("click", () => {
    if (isPaused == false) {
        pause.innerText = "Play";
        isPaused = true;
        isStarted = false;
    }
    else {
        isPaused = false;
        isStarted = true;
        pause.innerText = "Pause";
    }
});

reset.addEventListener("click", () => {
    milisecCount = secondsCount = minuteCount = 0;
    isStarted = false;
    isPaused = true;
    pause.innerText = "Pause";
});

setInterval(() => {
    if (isStarted) {
        milisecCount++;
        if (milisecCount === 220) {
            secondsCount++;
            milisecCount = 0;
        }
        if (secondsCount == 59) {
            minuteCount++;
            secondsCount = 0;
        }
    }
    milisec.innerText = milisecCount;
    seconds.innerText = secondsCount;
    minute.innerText = minuteCount;
}, 1);


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