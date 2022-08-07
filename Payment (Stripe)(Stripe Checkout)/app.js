
const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
app.use(express.json())
var indexRouter = require('./routes/index'); 
app.set('view engine', 'ejs');
app.use('/',indexRouter);

app.listen(4000,()=>{
    console.log("listneing");
})
