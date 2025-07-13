const notesContainer=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");

//to show the previous data which is previously stored
 function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
 }

 showNotes(); 

//for store the data
function updateStroage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

//for creation of input-box
createBtn.addEventListener("click", ()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);

})
notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStroage();
    }
    else if(e.target.tagName === "P"){
        notes =document.querySelectorAll(".input-box")
        notes.forEach(nt => {
            nt.onkeyup =function(){
                updateStroage();
            }
        })
    }
});

//enter line break
document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
