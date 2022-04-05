import "reflect-metadata";
import express from 'express';
import cors from 'cors';
import "./database";
import { routes } from "./routes";

const app = express();

app.use(cors());

app.use(express.json({limit: "10mb"}));

app.use(express.urlencoded({extended: true, limit: "10mb"}));

app.use(routes)

app.listen(3000, () => console.log("Server is running"))