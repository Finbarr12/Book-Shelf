import express, { Application } from "express";
import cors from "cors";
import router from "../Router/router";
const app: Application = express();
app.use(express.json());

const Port = process.env.Port || 1122;

require("../config/db");

app.use(cors({ origin: "*" }));

app.use("/", router);

app.listen(Port, () => {
  console.log("Running server");
});
