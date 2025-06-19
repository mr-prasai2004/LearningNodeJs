const express = require('express')
const app = express()




app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.send("Welcome Aayush")
})

app.get('/addblog',(req,res)=>{
    res.render('addBlog')
})

app.get('/editblog',(req,res)=>{
    res.render('editBlog')
})

app.listen(3000,()=>{
    console.log("server is running in port 3000");
})