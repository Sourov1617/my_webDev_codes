// function getName(){
//     console.log("Sourov nandi");
// }
// getName();

// function getAverage(num1,num2){
//     let avg=(num1+num2)/2;
//     console.log("Average :",avg);
// }

// getAverage(10,20)

function getMyName(firstName, lastName) {

    let fullName = firstName + " " + lastName;
    return fullName;

    //unreachable statements those come after return keyowrd
    let a=10;
    let b=20;
     let c= a+b;
     console.log(c);


}

let fullName = getMyName("Sourov", "Nandi");
console.log("My name is :", fullName)