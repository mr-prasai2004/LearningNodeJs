const express = require('express')
const app = express()
// const test = require('dotenv')
// test.config() or
require('dotenv').config()
require('./model/index')
require('./model/userModel')



app.set('view engine', 'ejs')

app.get('/allblogs',(req,res)=>{
    res.render("allBlogs")
})

app.get('/addblog',(req,res)=>{
    res.render('addBlog')
})

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log("server is running in port "+PORT);
})