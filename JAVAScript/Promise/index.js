//promise in pending state by default
// let firstPromise=new Promise((resolve, reject) => {

//     console.log("Sourov")

// })

//promise in fulfilled sate
// let firstPromise=new Promise((resolve, reject) => {

//     console.log("Sourov")
//     resolve(101);

// })

//promise in reject state
// let firstPromise=new Promise((resolve, reject) => {

//     console.log("Sourov")
//     reject(new Error("Internal error found"))

// })

// async code in side promise

// function sayName(){
//     console.log("My name is Sourov Nandi")
// }

// let promise= new Promise((resolve,reject)=>{

//     console.log("hello")
//     setTimeout(sayName,6000) // Simulating a delay of 2 seconds;
//     resolve("Promise resolved successfully");
//     console.log("What are u doing??")
// })

// promise with then and catch method
let promise1 = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        console.log("Promise successful");
        resolve("promise fulfilled first msg");
    } else {
        console.log("Promise rejected");
        reject("promise rejected");
    }
});

promise1
    .then((message) => {
        console.log("First msg is: " + message);
        return "promise fulfilled second msg";
    })
    .then((message) => {
        console.log("Sec msg is: " + message);
        return "promise fulfilled third msg";
    })
    .catch((error) => {
        console.log("Error msg is: " + error);
    })
    .finally(() => {
        console.log("I am the final state of the promise,and i will always print");
    });

    //promise with try and catch another example
const getPromise=() => {
    return new Promise((resolve, reject) => {
        console.log("Promise started");
        resolve("Promise resolved successfully");
    });
}
let promise=getPromise();
promise
    .then((message) => {
        console.log("Message from promise: " + message);
        throw new Error("An error occurred in the promise chain");
    })
    .catch((error) => {
        console.error("Caught an error: " + error.message);
    })
    .finally(() => {
        console.log("This will always execute, regardless of success or failure.");
    });