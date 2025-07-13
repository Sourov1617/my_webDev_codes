
// //code-1

// const t1=performance.now();

// for(let i=1;i<=10;i++){
//     let para=document.createElement('p');
//     para.textContent="This is para no:"+i;
//     document.body.appendChild(para)
// }
// const t2=performance.now();

// console.log("total time taken:"+(t2-t1));

// //code-2

const t3=performance.now();
let mydiv=document.createElement('div');

for(let i=1;i<=10;i++){
    let para=document.createElement('p');
    para.textContent="This is para no:"+i;
    mydiv.appendChild(para)
}
document.body.mydiv;
const t4=performance.now();
console.log("total time taken:"+(t4-t3));

//best practice with document fragment

const t5=performance.now()

let fragment=document.createDocumentFragment()

for(let i=1;i<=10;i++){
    let para=document.createElement('p')
    para.textContent=("This is para no:1"+i);
//no reflow and repaint is there
   fragment.appendChild(para)
}
document.body.fragment;
const t6=performance.now();
console.log("total time taken is:"+(t6-t5))