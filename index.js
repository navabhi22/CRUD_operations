const express = require('express');
const path=require('path');
const app=express();
// app.use(express.static(__dirname+'/public'))
app.use(express.urlencoded({ extended: true }))

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'));



app.get('/recipes',(req,res)=>{
    res.render('home');
})

app.get('/',(req,res)=>{
    res.send('workingFine');
})

app.listen(4400,()=>{
    console.log('Server is Up at PORT', 4400);
})