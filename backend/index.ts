import express from "express";
import dotenv from "dotenv/config"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 8080

// Middleware
app.use(cors())
app.use(express.json()) // convert http requests to json object

app.get("/", (req, res) => {
  console.log("path: /")
  res.send("hello world")
})

app.listen(PORT, () => {
  console.log("Server stated at post: ", PORT)
})
