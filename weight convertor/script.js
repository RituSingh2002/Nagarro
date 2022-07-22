let ele=document.getElementById('btn');
ele.addEventListener('click',converter);
function converter(){
    let Gram=document.getElementById('gram').value;
    let val=Gram/1000;
    document.getElementById('kg').innerHTML=(val).toString();
    document.getElementById('gram').value="";
}
