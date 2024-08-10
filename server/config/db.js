import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config(
    {
        path: ".env"
    }
)
const dbconnect = () => {
    console.log(process.env.MONGO_URI)
    mongoose.connect(process.env.MONGO_URI).then(() => console.log("Connected to DB")).catch((err) => console.log(err))
}
export default dbconnect;