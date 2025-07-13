// //creation of objects
// let person={
//     name:"Sourov",
//     age:22,
//     country:'Bangladesh',
//     height:'5ft 10inch',
//     //crating a func inside a obj
//     greet:function(){
//         console.log("hello guys");
//     }
// };
// //printing obj elements
// console.log(person);
// //printing obj specific elements elements
// console.log("Age is:"+person.age);
// //printing a the func
// person.greet();
// //creating another refernce for the same obj
// let person2 =person;
// console.log(person2);
// //finding the type of obj
// console.log(typeof(person))

//Array

//creation of an array
// let arr=['love',24,"sourov"];
// console.log(arr);
// creation a array using  array-constractor
let brr = new Array('love', 16, "sourov", true, 20.31, false);
console.log(brr);
// console.log(typeof(brr));

//modifing array elements

//push method add element at the end of the array
brr.push("opu");
console.log(brr);
//unshift method add element at the begging of the array
brr.unshift('hello');
console.log(brr);
//pop method delete element at the end of the array
brr.pop();
console.log(brr);
//shift method delete element at the begging of the array
brr.shift();
console.log(brr);
//slice method only take the portion of the array
// console.log(brr.slice(2,4));
//splice method is used for change the content
console.log(brr.splice(1, 1, 'opu'));
console.log(brr);
//map func in an array

// let array=[10,20,30];
// let ansArray=array.map((number)=>{
//     return number*number;
// });
// console.log("new array: "+ansArray);

//filter in a array
let arr = [10, 40, 25, 200, 90];
let ansArr = arr.filter((number) => {

    return number % 2 === 0;
    // if(number%2===0){
    //     return true
    // }
    // else{
    //     return false;
    // }
})
console.log(ansArr);

//reduce func in an array
let ans = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0)
console.log(ans)

//sort method in an array
arr.sort(); //in this type elements are treated as string
console.log(arr);
//sort in ascenending order
arr.sort((a,b)=>a-b);
console.log(arr)
//sort in decending order
arr.sort((a,b)=>b-a);
console.log(arr);

//find the index of the element
console.log(arr.indexOf(90));


