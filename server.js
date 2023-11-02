import "dotenv/config.js";
import express from "express";
import mongoose from "mongoose"



const app = express();

app.use("/api", (req, res) => {
    res.send("hello world")
})
// connect db
const db = process.env.Db_Url
mongoose.connect(db)
.then(() => console.log("database connected"))
.catch(err => console.log(err))



const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`server is running at ${port}`)
})