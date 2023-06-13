import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./dbConfig/db.js";
import router from "./router/postRouter.js";

// configure env
dotenv.config();

// db connect
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", router);

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
