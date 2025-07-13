//object cloning


  //object creation

let human1={
    age:22,
    ht:170,
    wt:80
};

// console.log(human1)
// human1.color="white";
// console.log(human1)


//object cloning through spread opeator
// let human2={...human1}

// human1.eye="black eye"

// console.log(human1)

// console.log(human2) 

//object cloning through assign opeator

let human3={
    value:101,
    name:"Sourov"
};

let human2=Object.assign({},human1,human3)
human1.age=23;

console.log(human1)

console.log(human2)

