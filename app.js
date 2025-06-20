const express = require('express') //Requiring express package
const app= express() // storing it in app  variable throughout we use it.

//saying nodejs to set all requiremen config for ejs (to use ejs)
app.set('view engine','ejs')


app.get('/',(req,res)=>{
    const name="Aayush Prasai"
    res.render("home",{hello: name})
})

app.get('/about',(req,res)=>{
    res.render("about")
})
app.get('/contact',(req,res)=>{
    res.send("From Contact Page")
})

app.get('/landing',(req,res)=>{
    res.render("landing")
})

app.listen(3000,()=>{
    console.log("Server is Running in port 3000")
})