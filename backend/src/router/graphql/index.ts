import {Router} from 'express';
import {graphqlHTTP} from 'express-graphql';
import {schema} from './schema';
import expressPlayground from 'graphql-playground-middleware-express'

export const graphqlRouter = Router()

// graphqlRouter.get('/', (req,res)=>{
//     res.send("i don't know the health of the app")
// })

// graphqlRouter.post('/', (req,res)=>{
//     res.send("i guess this is use to return the selected information for any page")
// })
graphqlRouter.use("/", expressPlayground({endpoint:"/graphqli"}))
graphqlRouter.use("/graphqli", graphqlHTTP({
    schema,
    graphiql:true
}))