import express from "express";

const app = express();

import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";

app.use(
  cors({
    origin: process.origin.CORS_ORIGIN,
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

app.use(express.json({ limit: "8kb" }));

app.use(cookieParser());


export { app };
