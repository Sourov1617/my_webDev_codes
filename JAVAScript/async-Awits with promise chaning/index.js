//async- awaits--->>is used to serial execution of sync and async code

async function getdata() {
    let response= await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response)

    //parse json -async
    let data=await response.json()
}

getdata();


//for example:-
//prepare url  / api endponit->sync
//await  // fetech data --> network call->async
//process data->sync
