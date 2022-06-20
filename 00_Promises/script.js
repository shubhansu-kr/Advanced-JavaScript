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

// Catching Errors in Async Await Promise 
// We use try and err block catch the error 

const fetchAPI = async () => {
    try {
        const f1 = await fetch('https://dsklfalk-dslkaf.com')
        console.log('Data fetched sucessfully');
    } catch (error) {
        console.log('Something went wrong!', error);
    }
};

// async functions by default return a promise, so even if it fails or throw an 
// error, the script is not teminated, however if the function is not async and 
// throws an error, it causes the script to crash and terminates the compilation
// However try catch block helps overcome this issue.


fetchAPI();

console.log('Still works even if fetchAPI fails');

// const func1 = () => {
//     const f1 = fetch('https://dsklfalk-dslkaf.com')
//     console.log('Data fetched sucessfully');
// };
// Program terminated due to error

console.log('Flag 1') ;

const func2 = () => {
    try {
        const f1 = fetch('https://dsklfalk-dslkaf.com')
        console.log('Data fetched sucessfully');
    } catch (error) {
        console.log('Something went wrongTurn !', error);
    }
};

console.log('Lets see');