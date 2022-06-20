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

//

// fetch('...').then(data => {
//     return [data.json(), data];
// }).then(params => {
//     params[0]; // data.json
//     params[1]; // data
// });

// Let's create a nested promise 

setIntervalPromise().then(() => {
    console.log('StateMent 1');

    return setIntervalPromise();
}).then(() => {
    console.log('StateMent 2');

    return setIntervalPromise();
}).then(() => {
    console.log('StateMent 3');

    return setIntervalPromise();
}).then(() => {
    console.log('StateMent 4');

    return setIntervalPromise();
}).then(() => {
    console.log('StateMent 5');

    return setIntervalPromise();
});
// Prints Statement ${n} in interval of one sec for n[1 to 5];

// Similar funcitonality with async-await syntax: 
// Much more cleaner and readable 
async function similarFunction () {
    console.log('Statement 0');
    await setIntervalPromise();

    console.log('Statement 1');
    await setIntervalPromise();

    console.log('Statement 2');
    await setIntervalPromise();

    console.log('Statement 3');
    await setIntervalPromise();

    console.log('Statement 4');
    await setIntervalPromise();

    console.log('Statement 5');
    await setIntervalPromise();
};

// Here we are waiting for statement 1 to be executed and the block
// to be resolved and then statement 2 to be executed and similarly 
// every block waits for the previous block to be executed then only 
// next block is executed. 

// However since the method is a promise, we can call the method and move forward 
// without waiting for it to be resolved. 

async function boot() {
    console.log('first');
    setIntervalPromise().then(() => console.log('second')); // printed after third
    console.log('third');
}

boot();

// If we use async, we dont wait for the promise to be resolved, the promise method
// is queued in the and next call is executed, however if we wish for some function 
// to be executed first and then the control move forward, we can use await to 
// tell JS to move forward only when the block is executed successfully. 

async function boot1() {
    console.log('first 1'); // first
    await setIntervalPromise().then(() => console.log('second 1')); // second

    // js waits for the second1 to be printed and then moves forward 

    console.log('third 1'); // third
}

boot1();

// Always use await inside async block, Although JS has included the feature to 
// use await without async, all the browser don't support it yet. 

// Now what actually, await does is, it waits for the promise to be resolved, so
// we this syntax also makes appropriate sense. 

const boot2 = async () => {
    console.log('First 2') ;
    const f1 = setIntervalPromise().then(()=>{console.log('Second 2')});

    await f1; // Specifically tell the JS to wait for promise f1 ;
    console.log('Third 2') ;
};

boot2();