const express = require("express");
const fs = require('fs');
const path = require("path");
const app = express();
const port = 3000;
let emp = [];

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended : true}))
app.set('view engine','ejs')


app.get('/',function(req,res){
    res.render('index')
})

app.get('/table',function(req,res){
    res.render('table',{emp})
})


app.post('/',function(req,res){
    emp.push({...req.body,id : Date.now()})
    res.redirect('/table' || '/')
})

app.get('emp/delete/:id',function(req,res){
    let { id } = req.params;
    emp = emp.filter(val => val.id != id)
    res.redirect('/table')
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