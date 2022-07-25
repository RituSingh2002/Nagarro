import {fetchFromDb} from './script.js'

 let ele=document.getElementById('btn');
ele.addEventListener('click',my);
function my(){
    let input=document.getElementById('jokeId').value;
    console.log(input);
    fetchFromDb(id);
    document.getElementById('joke').innerHTML=toString(input);

}
 
