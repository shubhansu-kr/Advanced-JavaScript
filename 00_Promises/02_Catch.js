const getMeAPromise = () => {
    // ... Your code goes here 
    // ... Let's assume this a some fetch from another server

    let data;
    data = fetch('./data.json');

    return data;
}

const promise = getMeAPromise();

console.log(promise); // Printed first 

// .then is only called when the status of promise goes from pending to 
// resolved and if the status goes from pending to rejected, .catch is executed

promise.then(result => {
    console.log("Resolved \n",result); // Printed Second 
}).catch(error => {
    console.log(`Something went wrong!
    ${error}`);
});

