import express from "express";
import orders from "./routes/orders";
import initdb from "./db/initdb";

const port = process.env.PORT || 8080;

(async () => {

  await initdb();

  express()
    .use("/", express.static("public"))
    .use(express.json())
    .use("/api/orders", orders)
    .listen(port, () => {
      console.log("server started at port " + port);
    });

})().catch(e => {
  console.error(e);
  process.exitCode = 1;
});
