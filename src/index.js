import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({ path: "./env" });

import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`App listening on port :${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`mongo db conneciton failed !! ${err}`);
  });
