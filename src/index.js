require('dotenv').config({path:'src/.env'})
const express= require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const userRoutes=require("./routes/userRouter")
const blogRoutes=require("./routes/blogRoutes")
const commentRoutes=require("./routes/commentRoute")
const app= express();

app.use(cors())
app.use(express.json())
app.use("/api/user",userRoutes )
app.use("/api/blog",blogRoutes)
app.use("/api/comment",commentRoutes)

const PORT=process.env.PORT || 5000;


mongoose.connect(process.env.MONGODB_URI,{
}).then(()=>{
    console.log("MongoDB connected")
}).catch((err)=>{
    console.log(err)
})

app.listen(PORT ,()=>{
    console.log(`server listening at Port ${PORT}`)
})