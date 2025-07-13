
// function changeText(){
//     let fpara=document.getElementById('fpara')
//     fpara.textContent="hello sourov"
// }
// let fpara=document.getElementById('fpara')
// fpara.addEventListener('click',changeText)

// let paras=document.querySelectorAll('p')

let para=document.getElementById('para')

function alertEvent(event){
    alert("you have clicked on para:"+event.target.textContent)
}

// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     para.addEventListener('click',alertEvent)
// }
para.addEventListener('click',alertEvent)