import express from "express";

const app = express();

import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);
app.use(express.static("public"));

app.use(express.json({ limit: "16kb" }));

app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";

// routes declaration

app.use("/api/v1/users", userRouter);

export { app };
