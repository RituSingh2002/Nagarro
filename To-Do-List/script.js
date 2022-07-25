const inputBox=document.querySelector(".inputField input");
const addBtn=document.querySelector(".inputField button");
inputBox.oKeyup=()=>{
let userData=inputBox.value;
// getting user entered value;
if(userData.trim()!=0){  // if user value are'nt only spaces
addBtn.classList.add("active"); // active the add button
}

}