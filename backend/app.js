const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PostModel = require("./Models/post")

//Password is: Angular
mongoose.connect("mongodb+srv://Nathan:Angular@webdev2-finalproject.hef3jyb.mongodb.net/WebDev2FinalProjectretryWrites=true&w=majority&appName=WebDev2-FinalProject").then(()=>{
  console.log('Connected to database')
})
.catch(()=>{
  console.log('connection error')
})

app.post("/api/posts", (req, res, next) => {
  const post = new PostModel({
    title: req.body.title,
    content: req.body.content
  });

  post.save();
  console.log(post);
  res.status(201).json({
    message: "Post added successfully"
  });
})

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  res.setHeader("Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );

  next();
});

app.get('/api/posts', (req, res, next) => {
  PostModel.find().then(documents => {
    res.status(200).json({
      message:"This is fetched data",
      posts: documents
    });
  });
});

module.exports = app
