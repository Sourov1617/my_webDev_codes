//varibale scoping:=>

//global variable=>

var age=25;

console.log(age)

{
    console.log(age)
}

if(true){
    console.log(age)
}

for(let i=0;i<2;i++){
    console.log("age is:"+age)
}

//function scoping=>which variable is declare in side the func can't call outside the func

    function myName(){
        var fullname="Sourov Nandi";
        console.log(fullname)
    }
    myName()