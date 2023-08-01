import mongoose from "mongoose"
import env from "dotenv"

env.config()

export const dbConfig = async()=>{
try {
    mongoose.connect(process.env.DB_STRING!).then(()=>{
        console.log("Connected successfully!")
    })
} catch (error) {
    console.log(error)
}
}