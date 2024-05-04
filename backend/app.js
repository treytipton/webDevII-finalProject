const express = require('express')
const app = express()

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

app.use('/api/posts', (req, res, next) => {
  const posts = [
    {
      id: "1",
      title: "First",
      content: "This is the first message"
    },

    {
      id: "2",
      title: "Second",
      content: "This is the second message"
    },

    {
      id: "3",
      title: "Third",
      content: "This is the third message"
    }
  ];

  res.status(200).json({
    message:"This is fetched data",
    posts: posts
  });
})

module.exports = app
