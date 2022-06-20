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