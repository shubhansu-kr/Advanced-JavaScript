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