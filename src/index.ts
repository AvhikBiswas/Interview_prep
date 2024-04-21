import express from "express";
import dotenv from "dotenv";
import connectDB from "./confilg/database";

dotenv.config();
const port = process.env.PORT || 8000;
const app = express();

app.get("/", (req, res) => {
  res.send("Path Hitted");
});

app.listen(port,async () => {
  await connectDB();
  console.log("Listning on port", port);
});
