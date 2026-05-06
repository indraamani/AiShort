import express from "express";

const app = express()

app.get("/", (req, res) => {
  console.log("path: /")
  res.send("hello world")
})

app.listen(8080, () => {
  console.log("Server stated at post: 8080")
})
