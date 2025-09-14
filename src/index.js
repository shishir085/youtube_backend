import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
import { DB_NAME } from "./constants"


import express from "express";

const app=express()
// iffe

(async () => {
    try {
        await
            mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

            app.on("error",(error)=>{
                    
            })
    } catch (error) {
        console.error(error);
        throw err;
    }
})();
