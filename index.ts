import express, {json} from "express";
import orders from "./routes/orders";

express()
  .use(json())
  .use("/api/orders", orders)
  .listen("8080", () => {
    console.log("started at port 8080");
  });
