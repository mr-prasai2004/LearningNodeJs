const express = require('express')
const { blogs } = require('./model/index')
const app = express()

// const test = require('dotenv')
// test.config() or
require('dotenv').config()
require('./model/index')
require('./model/userModel')



app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render("allBlogs")
})

app.get('/addBlog',(req,res)=>{
    res.render('addBlog')
})

app.put('/editblog/:id',async(res,req)=>{
   try{
    const blogId = res.params.id;
    const blog = await blogs.findbyPk(blogId);
    if(!blog){
        return 
        res.statusCode(404).send("Blog not found");
    }
    await blog.update({
        title:req.body.title,
        subTitle: req.body.subTitle,
        description: req.body.description,
    });
        res.send("Blog Update");
   } catch(err){
    console.error(err);
    res.statusCode(505).send("error Updating blog");
   }
})



 
//telling node.js to accept incomming data(parsing data)
// app.use(express.json())
app.use(express.urlencoded({extended: true}))

//api for handling formdata
app.post('/addBlog',async(req,res)=>{
    // console.log(req.body)
    //    const title= req.body.title;
    //    const subTitle= req.body.subTitle;
    //    const description = req.body.description;
    //Alternative
    const{title, subTitle, description}= req.body

       await blogs.create({
        title,
        subTitle,
        description,
       })
    res.send("/")
})
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log("server is running in port "+PORT);
})