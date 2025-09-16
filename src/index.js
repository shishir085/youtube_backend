import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
import { DB_NAME } from "./constants.js"



    ;const connectDB= (async () => {

        try {
            const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME} `)
            console.log(`\n mongo db connected !! db host ${connectionInstance.connection.host}`);

        } catch (error) {
            console.log(error);

        }
    })()

    export default connectDB