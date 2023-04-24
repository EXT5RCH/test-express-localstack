import indexRouter from "./routes/index";
import lambdaRouter from "./routes/lambda";
import express from "express";
const app = express();
app.use(express.json());

app.use("/", indexRouter);
app.use("/lambda", lambdaRouter);

export default app;
