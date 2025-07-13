//try catch block 

// try{
//     console.log("try block starts here")
//     console.log(x)
//     console.log("try block ends here")
// }
// catch(error){
//     console.log("I am inside catch block")
//     console.log("your error is:",error)
// }

// //finally block
//  finally{
//     console.log("I will run all the time")
//  }

//create custum error

try{
    console.log(x)
}
catch(err){
    throw new Error("First declare then use the value")
    console.log(err)
}