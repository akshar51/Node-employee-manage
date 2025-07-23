const express = require("express");
const fs = require('fs');
const path = require("path");
const app = express();
const port = 3000;
const emp = [];

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended : true}))
app.set('view engine','ejs')


app.get('/',function(req,res){
    res.render('index')
})

app.get('/table',function(req,res){
    res.render('table',{emp})
    res.redirect(req.get('Referrer'|| '/'))
})


app.post('/',function(req,res){
    emp.push({...req.body,id : Date.now()})
    res.redirect(req.get('Referrer') || '/')
})

app.listen(port,function(err){
    if(err){
        console.log(err.message)
    }
    else{
        console.log("Server start");
        console.log("http://localhost:"+port);
    }
})