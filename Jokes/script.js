// const express=require('express');
 
// const app=express();
import fetch from 'node-fetch';
import mongoose from 'mongoose';
import http from 'http';
import fs from 'fs';
 

const PORT=3000; 

fs.readFile('./index.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});
 mongoose.connect("mongodb://localhost:27017/JOKES");
 
 const jokesSchema= new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    joke:{
        type:String,
        required:true
    },
    categories:{
      type:['String'],
      required:true
    }

})
const  alljokes= mongoose.model('jokes',jokesSchema);
async function getJokes(){
    const  jokes=await fetch("http://api.icndb.com/jokes")
    
    const response=await jokes.json();
    let i=0;
     while(i<response.value.length){
        const data=new alljokes({
           id: response.value[i].id,
           joke:response.value[i].joke,
           categories:response.value[i].categories

        });
        data.save();
        i+=1;
     }
        console.log(response.value.length);
    
     
}
 

getJokes();