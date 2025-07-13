//variable hoisting

console.log(age);
var age = 25;

//func hoisting

myName("Sourov")

function myName(name) {
    console.log(name)
}
// function is known as the first class citizen in JS

// reason:=>

//assign to variable=>

// let greet = function () {
//     console.log("Greeting for the day")
// }
// greet();


//function to function=>

// function greetMe(greet,name){
//     console.log("Hello",name);
//     greet();
// }
// function greet(){
//     console.log("Greeting for the day")
// }
// greetMe(greet,"Sourov")

//funtion returing a func=>

    // function solve(){
    //     return function(number){
    //         return number*number;
    //     }
    // }
    // let ans=solve();
    // let finalAns=ans(10)
    // console.log(finalAns)

    // funtion in an array

    // const arr=[
    //     function(a,b){
    //         return a+b;
    //     },
    //     function(a,b){
    //         return a-b;
    //     },
    //     function(a,b){
    //         return a*b;
            
    //     },
    //     function(a,b){
    //         return a%b;
    //     }
    // ];
    
    // let first=arr[0];
    // let ans=first(5,10);
    // console.log(ans);


    //func is used as a properties of an obj

    let obj={
        name:"Sourov",
        age:22,
        weight:78,
        height:"5.10'",
        greet:()=>{
            console.log("hello jee")
        }
    };
    
    console.log(obj.name);
    obj.greet();

