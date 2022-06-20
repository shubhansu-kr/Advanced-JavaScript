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

setInterval(() => {
    timer.innerText = new Date().toLocaleString();
}, 1000);

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