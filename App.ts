import express, { Application,Request,Response } from "express"
import cors from "cors"

export const appConfig = (app:Application)=>{
    app
    .use(cors())
    .use(express.json())

    



    .get("/",(req:Request,res:Response)=>{
try {
    res.status(200).json({
        message:"Connected successfully!"
    })
} catch (error) {
    res.status(400).json({
        message:" Cannot connect!",
        data:error.message
    })
}
    })
}