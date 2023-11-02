import "dotenv/config.js";
import express from "express";
import mongoose from "mongoose"
import router from "./routes/user.js";



const app = express();
 
// connect db
const db = process.env.Db_Url
mongoose.connect(db)
.then(() => console.log("database connected"))
.catch(err => console.log(err))

// routes
app.use("/api/user", router)



const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`server is running at ${port}`)
})