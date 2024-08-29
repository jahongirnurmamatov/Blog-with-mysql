import express from "express";
import cors from "cors";
import postRoute from "./routes/posts.js";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import {upload} from './multer.js';
import { db } from "./db.js";
import cookieParser from "cookie-parser";

const app = express();

//middlewares
app.use(express.json());
app.use(
    cors({
      credentials: true,
      origin: "http://localhost:5173",
    })
  );
  
app.use(cookieParser());


app.post('/api/upload',upload.single('file'),(req,res)=>{
  res.status(200).json(req.file.filename);
})


//endpoinst
app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

db.connect((err) => {
  if (err) return console.log(err);
  console.log("Database connected!");
});

app.listen(8000, () => {
  console.log("App is listeng to port ", 8000);
});
