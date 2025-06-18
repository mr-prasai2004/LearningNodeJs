const express = require('express') //Requiring express package
const app= express() // storing it in app  variable throughout we use it.

//saying nodejs to set all requiremen config for ejs (to use ejs)
app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.render("home")
})

app.get('/about',(req,res)=>{
    res.render("about")
})
app.get('/contact',(req,res)=>{
    res.send("From Contact Page")
})


app.listen(3000,()=>{
    console.log("Server is Running in port 3000")
})