import express from "express";
import bodyParser from "body-parser";
import router from "./routes/activities.js";

const app = express();

const Port = 5000;
app.use(bodyParser.json());
app.use("/api", router);

app.listen(Port, () => {
  console.log("App is listening to", Port);
});
