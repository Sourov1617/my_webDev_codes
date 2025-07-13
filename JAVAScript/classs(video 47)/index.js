class Human{

//properties

age=22; //publicly declared bcz we can use it outside class
#name="Sourov"; //private declaration using # before variable name,we can use it outside class
wt=78;
ht=178

//we use constractor to assign new val of the properties of the obj

constructor(newAge,newHeight){
    this.age=newAge;
    this.ht=newHeight;
}

//behaviour

walking(){
    console.log("I am walking");
   console.log(this.#name);
}
running(){
    console.log("I am running")
}

//through getter and setter we access private val outside the class
get fetchName(){
    return this.#name;
}
set modifyName(fullName){
    this.#name=fullName;
}
    
}

let obj=new Human(23,180);
console.log(obj.age)
obj.walking()
obj.running()
console.log(obj.fetchName)
console.log("new age is:"+obj.age)
console.log("new height is:"+obj.ht)

//default parameter

//example-1:
function sayName( fname="Sourov",lname=fname.toUpperCase()){
    console.log(`${fname} ${lname}`);

}
sayName();

//example-2:
// function solve(value={age:22,wt:79}){
// console.log(value)
// }
// solve()

//example-3:
// function solve(value=[2,3,4,4]){
//     console.log(value)
// }
// solve()

//example-4:
function getAge()
{
    return 16;
}
function solve(name="sourov",age=getAge()){
    console.log(name,age)
}
solve()