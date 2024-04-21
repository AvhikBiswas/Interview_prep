import express from "express";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 8000;
const app = express();

app.get("/", (req, res) => {
  res.send("Path Hitted");
});

app.listen(port, () => {
  console.log("Listning on port", port);
});
