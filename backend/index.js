import express from "express";
import mongoose from "mongoose";
import routers from "./routes/userRoute.js";
import blogRouter from "./routes/blogRoute.js";

const app = express();

app.use(express.json())

const PORT = 5000;


app.use("/api/user", routers)
app.use("/api/blog", blogRouter)

mongoose
  .connect("mongodb://localhost:27017/Blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connected to database and listening to database"))
  .catch((err) => console.log(err));



app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`)
});
