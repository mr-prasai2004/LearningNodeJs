const express = require('express')
const app = express()




app.set('view engine', 'ejs')

app.get('/allblogs',(req,res)=>{
    res.render("allBlogs")
})

app.get('/addblog',(req,res)=>{
    res.render('addBlog')
})


app.listen(3000,()=>{
    console.log("server is running in port 3000");
})