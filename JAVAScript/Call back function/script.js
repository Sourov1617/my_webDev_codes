function getdata(getID,getNextdata) {
    return new Promise((resolve) => {
    // console.log("getdata function called with ID:", getID);
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
        const message = "Data fetched for ID: " + getID;
        
        resolve("success");
        console.log("Data fetched for ID:", getID);
        // Call the callback function with the fetched data
        if (getNextdata) {
            getNextdata();
        }
    }, 2000); // Simulating a delay of 2 second
})
}
// Call the getdata function with a callback
// This will fetch data for ID 1 and then execute the callback function
// which will fetch data for ID 2 and then fetch data for ID 3
//but this can result in callback hell if not managed properly
//callback hell occurs when multiple nested callbacks are used, making the code hard to read and maintain.
// To avoid callback hell, we can use promises or async/await in modern JavaScript
// getdata(1, ()=> {
    // console.log("Callback function executed after data fetch");
    // You can call another function here if needed
//     getdata(2,()=>{
//         getdata(3);
//     });
// }); 

//same code using promises
console.log("fetching data 1...");

getdata(1).then((result1) => {
    console.log("fetching data ..."); 
   return getdata(2);
   
}).then((result2) => { 

     getdata(2).then((result2) => {
    console.log(result2);
});
})

