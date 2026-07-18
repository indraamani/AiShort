import "./src/configs/instrument.js"
import express from "express";
import "dotenv/config"
import cors from "cors"
import { clerkMiddleware } from "@clerk/express";
import * as Sentry from "@sentry/node"
import clerkWebhooks from "./src/controllers/clerk.js";

const app = express()
const PORT = process.env.PORT || 8080

// Middleware
app.use(cors())
app.post("/api/clerk", express.raw({type: "application/raw"}), clerkWebhooks)
app.use(express.json()) // convert http requests to json object
app.use(clerkMiddleware())

app.get("/", (req, res) => {
  console.log("path: /")
  res.send("hello world")
})

Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
  console.log("Server stated at post: ", PORT)
})
