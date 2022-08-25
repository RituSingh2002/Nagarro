  const express=require('express');
 
  const app=express();
 import fetch from 'node-fetch';
 const mongoose=require('mongoose');
 
  mongoose.connect("mongodb://localhost:27017",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex: true,},(err)=>{
     if(!err){
         console.log('db connected');
    }
    else
     console.log('db listen');
  });
  app.listen(3000,()=>{
 console.log('Connection listen on 3000');
  })
// async function getJokes(){
//     const  jokes=await fetch("http://api.icndb.com/jokes/15",{
//     headers:{
//         'Accept':'application/json'
//     }
//  } );
//     const response=await jokes.json();
//     console.log(response);
// }
// getJokes();