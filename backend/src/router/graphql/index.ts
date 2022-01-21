import { Router } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema';
import * as noSqlModels from '../../models'
export const graphqlRouter = Router();

graphqlRouter.use("/graphql", graphqlHTTP({
    schema,
    graphiql:true,
    context:{
       noSqlModels
    }
}))