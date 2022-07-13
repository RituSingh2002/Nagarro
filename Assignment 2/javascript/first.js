let one="hello";
let two="world";
// console.log("%s %s",one,two);
// console.log("Hi");
// // Windows.alert('exit');
// // document.write('this is the document');
// console.warn("this is warning");
// console.error("this is an error");
// //

//// 
// function avg(a,b){
//     c=(a+b)/2;
//     return c;
// }
// let myDate=new Date();
// console.log(myDate);
let btn=document.querySelector('button');
btn.addEventListener('click',fn);
function fn(){
    let name=confirm('Enter Name');
    btn.textContent='Hi'+name;
}
