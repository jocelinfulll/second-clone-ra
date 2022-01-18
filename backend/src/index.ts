require("dotenv").config();
import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import {restRouter, graphqlRouter} from './router';
import { initDatabase } from "./middleware/mongo.middleware";

(async function() {
    const app = express();
    const port = process.env.PORT || 3000;

    app.use(cors());
    app.use(express.json());
    app.use(morgan('tiny'));
    //routes
    app.use("/rest", restRouter);
    app.use("/graphql", graphqlRouter);
    //base route
    app.get("/", (req, res) => {
        res.send("ok")
    });
  
    await initDatabase();

    app.listen(port, () => {
        console.log(`server started on port: ${port}`);
    });
})();