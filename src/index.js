import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 6000, () => {
      console.log(
        `App listening on port https:localhost://${process.env.PORT}`
      );
    });
  })
//   .catch((err) => {
//     console.log(`mongo db conneciton failed !! ${err}`);
//   });
