import express from "express";
import cors from "cors";
import DBconnection from "./database/db.js";

import router from "./routes/routes.js";
const app = express();

// enable cors always befor routing so route work
app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use("/", router);
const PORT = 8000;
DBconnection();
app.listen(PORT, () => console.log(`server is running at ${PORT}`));
