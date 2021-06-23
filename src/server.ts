import "express-async-errors";
import express from "express";
import { router } from "./routes";
import "reflect-metadata";
import "./database";
import { handleErrors } from "./middlewares/handleErrors";

const app = express();
app.use(express.json());
app.use(router);

app.use(handleErrors);

app.listen(3000, () => console.log("Server is running."));
