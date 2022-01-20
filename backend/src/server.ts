require('dotenv').config();
import express from 'express';
import cors from 'cors';
import morgan from 'morgan'
import { initDatabase } from "./connectors/mongodb";
import { graphqlRouter } from './router/graphql';

(async function() {
    const app = express();
    const port = process.env.PORT || 3000;

    app.use(cors());
    app.use(express.json());
    app.use(morgan('tiny'));

    app.use(graphqlRouter);
    
    await initDatabase();

    app.listen(port, () => {
        console.log(`server started on port: ${port}`);
    });
})();