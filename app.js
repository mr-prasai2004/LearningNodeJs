const express = require('express') //Requiring express package
const app= express() // storing it in app  variable throughout we use it.

app.get('/',(req,res)=>{
    res.send("<h1>Hello World, I'm Aayush Don</h1>")
})

app.get('/about',(req,res)=>{
    res.send("Welcome To About Page")
})
app.get('/contact',(req,res)=>{
    res.send("From Contact Page")

})


app.listen(3000,()=>{
    console.log("Server is Running in port 3000")
})