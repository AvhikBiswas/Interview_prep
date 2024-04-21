import express from "express";
import dotenv from "dotenv";
import connectDB from "./confilg/database";
import apiRoute from "./routes"

dotenv.config();

const port = process.env.PORT || 8000;
const app = express();
app.use(express.json());

app.use("/api",apiRoute);
app.get("/", (req, res) => {
  res.send("Path Hitted");
});

app.listen(port,async () => {
  await connectDB();
  console.log("Listning on port", port);
});
