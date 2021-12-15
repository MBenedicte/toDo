import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./src/router";
import { OK } from "./src/statusCodes";

const app = express();
const port = process.env.PORT;
app.use(express.urlencoded({ extended: false, limit: "3mb" }));
app.use(express.json({ limit: "3mb" }));

app.use(cors());
// Test the api URL
app.get("/", (req, res) =>
  res.json({
    status: OK,
    message: "To-do API",
  })
);

//toDo
app.use("/api/v1", router);

app.listen(port, () => console.log(`listening on port ${port}`));

export default app;
