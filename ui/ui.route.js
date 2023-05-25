import express from 'express';
import { Schema,mongoose } from 'mongoose';
const uiRoute = express.Router();
import fs from 'fs';
import User from '../model/User';
import customObjs from '../public/js/custom/form-1.json';

// var mongoose = require('mongoose');


uiRoute.get('/', (req, res) => {
    res.render('home', { title: 'Webpage Builder'});
});

uiRoute.get('/editor', (req, res) => {
    res.render('editor', { title: 'Webpage Builder'});
});


  
uiRoute.post('/sendData',async (req,res)=>{
    console.log(req.body); 
    
        let body = req.body.data
        let extra = req.body.extra;
        console.log(extra);
        var new_user = new User(body);
        
        await new_user.save()
    
    res.send('done');
})

uiRoute.post('/objAddition',(req,res)=>{
    //console.log(req.body);
    
    customObjs.push(req.body);
   // console.log(customObjs);
    var filepath = __dirname+'\\..\\public\\js\\custom\\form-1.json';
    console.log(filepath);
    fs.writeFile(filepath,JSON.stringify(customObjs),err =>{
        if(err)
            console.log(err);
        else 
            res.send('Created New Object');        
    });

})
uiRoute.post('/elementContent',(req,res)=>{
    // console.log(req.body);
    var htmlContent = req.body.demo;
    var page = req.body.page;
    console.log("Page Information: ");
    console.log(page);
    var script = "<script src=\"../js//deploy.js\"></script>";
    var bootstrap = "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css\" />"
    var pos = htmlContent.indexOf('</body>',0);
    htmlContent = addStr(htmlContent,pos,script);
    pos = htmlContent.indexOf('<style>',0);
    htmlContent = addStr(htmlContent,pos,bootstrap);
    var filepath = __dirname+'\\..\\public\\uix\\'+page+'.html';
    console.log(filepath);
    fs.writeFile(filepath,htmlContent,err =>{
        if(err)
            console.log(err);
        else 
            res.send('Updated the file');
        
    });
    
})

function addStr(str, index, stringToAdd){
    return str.substring(0, index) + stringToAdd + str.substring(index, str.length);
  }

uiRoute.all('*', (req, res) =>{
    res.render('404');
});

export default uiRoute;