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