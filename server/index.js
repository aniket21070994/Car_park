import express from 'express'
import dotenv from "dotenv"
import dbconnect from './config/db.js'
import cookieParser from 'cookie-parser'
import taskRouters from "./Routs/taskRouters.js"

import cors from "cors"
const app = express()
dotenv.config()

//middelwares
app.use(express.urlencoded({
  extended: true
}))

//app.use(cors({origin:"https://tweeter-clone-fullstack-1.onrender.com",credentials:true}))
app.use(express.json())
app.use(cookieParser())

//url:http:localhost:8080/api/vi/user//register
//connect db to server

dbconnect()
//apis

app.use("/api/test",(req,res)=>{
  res.send("<h1>home page</h1>")
})

app.use("/api/park/user", taskRouters)

//server listenning 
app.listen(process.env.PORT, () => console.log(`server responded at port ${process.env.PORT}`))