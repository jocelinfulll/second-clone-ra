import gql from 'graphql-tag';


export const typeDefs = gql`
    type Mooc{
        title:String!
        description:String!
        image:String!
        FullTimeDuration:String!
        WeekendTimeDuration:String!
    }
    type User{
        email:String!
        password:String!
        confirmed:Boolean!
    }
    type Group{
        name:String!
        admin:String!
        members:[User!]!
        mooc_id:ID!
        itensity:String!
    }
    type Me {
        username:String
        age:Int
    }
    type Query{
        me:Me
    }
    input createUserInput{
        password:String
        email:String
        confirmed:Boolean
    }
    type Mutation{
        createUser(input:createUserInput):User
    }
`