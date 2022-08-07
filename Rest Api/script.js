const fs = require('express');

const express = require('express');

const cors = require('cors');

const _ = require('lodash');

const { v4: uuid } = require("uuid");
const app=express();
app.get("/Movie",(req,res)=>{
    const name=["KGF Chapter 2","Dangal","War","RRR"];
    const Actor=["Yash","Aamir Khan","Tiger shroff","south"];
 
    res.json({
        movie_name : _.sample(name),
        actor_name: _.sample(Actor)
    });
})
app.listen(3000,()=>console.log("Api Server is Running"));