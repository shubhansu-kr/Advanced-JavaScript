const getMeAPromise = () => {
    // ... Your code goes here 
    // ... Let's assume this a some fetch from another server

    let data;
    data = fetch('./data.json');

    return data;
}

const promise = getMeAPromise();

console.log(promise); // Printed first 

// We can nest as many 'then' as required 


promise.then((result) => {
    console.log('Resolved', result); // Printed Second 

    // console.log('My JSON data is ', result.json());
    // Here result.json() is still a promise
    // We have to resolve the promise again to get the data we want

    // Printed after all the nested then(s);
    // result.json().then((data) => {
    //     console.log('Data Json recieved');
    //     console.log(`Name: ${data.Name}, Roll: ${data.Roll} `);
    // }).catch((err) => {
    //     console.log(err);
    // })

    // However this nesting is not the preferred way of nesting and 
    // thus we use this flat way of nesting in which we simply return
    // the promise if they depend on each other

    return result.json();

    // With every then, we have 3 option 

    // 1. Return a static value
    // 2. Return a Promise 
    // 3. Don't return anything 

    // Not returning anything is same as returning undefined 
    // return undefined
    // and thus option 1 and 3 are almost the same 



}).then((data1) => {
    console.log('Resolved data1', data1);

    // data1 is an object now, so returning a static value for 
    // further then blocks 

    return data1;
}).then((data2) => {
    console.log('Recieved data2', data2);

    return data2;
}).then((data3) => {
    console.log('data1, 2 and 3 are all the same', data3);

    return data3;
}).then((finalData) => {
    console.log('Final data recieved', finalData);
    
    return undefined;
}).catch((err) => {
    console.log('Error');
    console.log(err);
});