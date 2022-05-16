import express from "express";
import cors from "cors";
import orders from "./routes/orders";
import initdb from "./db/initdb";
import * as path from "path";

const port = process.env.PORT || 8080;

(async () => {

  await initdb();

  express()
    // .use(cors())
    .use(express.json())
    .use("/", express.static(path.join(__dirname, "public")))
    .use("/api/orders", orders)
    .get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "public", "index.html"));
    })
    .listen(port, () => {
      console.log("server started at port " + port);
    });

})().catch(e => {
  console.error(e);
  process.exitCode = 1;
});
