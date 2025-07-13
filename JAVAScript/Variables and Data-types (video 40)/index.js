// function-scope method
 
function example(){

    var x=10;

    console.log(x);
}
example();

// globally-scope method

var x=20;
if(true){

    console.log(x);
}

// block-scope method

{
    let a = 10;
     console.log(a);
}

// dynamically declaration
let s=10;
s=true;
s=Boolean;
s="Sourov"
console.log(s);


//datatypes

//number
// let marks=20;
// console.log(marks);

// marks=20.78;
// console.log(marks);

//denote the type of data
// console.log("data type is:"+typeof(marks));

//boolean
// marks=true;
// console.log(marks);

//string
marks="Sourov Nandi";
console.log(marks);

//denote the length of the data
console.log("length is:"+marks.length);

//string to upper case
let upperCase=marks.toUpperCase();
console.log(upperCase)

//string to lower case
console.log(marks.toLowerCase());

// string add way

let str1="mobile";
let str2= "charger";

let result= str1+" and "+ str2;
// or
// let result=`${str1} and ${str2}`;

console.log(result);

//Substring method on strings
let subStr1=marks.substring(2, 9);

console.log(subStr1);

//Split method on strings

let msg="Once upon a time there lived a ghost";
let splitArray=msg.split(" ");
console.log(splitArray);

//Join method on strings
let array=["Sourov","is","a","good","boy"];
let joinArray=array.join(" ");
console.log(joinArray);


//undefined type
// let age;
// console.log(age);

//null types
 
let range=null;
console.log(range);
console.log(typeof(range));

//logical for non-boolean
console.log(true && 'opu');

//short-circuting
console.log(false|| true||false||true||false);


