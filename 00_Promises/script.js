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


const getMeAPromise = () => {

    let data;
    data = fetch('./data.json');

    return data;
}

const promise = getMeAPromise()
console.log(promise);

// Nested catch 
promise.then((result) => {
    console.log('Resolved', result);

    return result.json();

}).catch((err) => {
    console.log(err);

}).then((data1) => {
    console.log('Pass 1');

    return data1;
}).catch((err) => {
    console.log(err);

}).then((data2) => {
    console.log('Pass 2');
    throw new Error('Error 2');

    // If any node of the chain throws an error, the further nodes are not executed
    // and the control jumps to the nearest catch block  

    // So if we wish to handle each and every then seprately, we need to add multiple 
    // catch block right after every then.

    return data2;
}).catch((err) => {
    console.log(err);

}).then((data3) => {
    console.log('Pass 3');

    return data3;
}).catch((err) => {
    console.log(err);
    // err also returns an undefined by default

}).then((finalData) => {
    console.log('Pass 4', finalData);

    return undefined;
}).catch((err) => {
    console.log(err);

});

// However this way of handling multiple catch do look messy and is difficult 
// to maintain 

