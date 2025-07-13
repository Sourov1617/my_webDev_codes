const url="https://catfact.ninja/facts";
  const factElement=document.querySelector("#fact");
  const btn=document.querySelector("#btn");

//this is done by async-await
  async function getFacts(){
    console.log("Fetching data....");
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    factElement.innerHTML = data.data[5].fact;
}

//this is done by promise channing

//  function getFacts(){
//     console.log("Fetching data....")
// fetch(url)
//     .then((response) => {
//         console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         factElement.innerHTML = data.data[5].fact;
//     });
//     }
btn.addEventListener("click",getFacts);