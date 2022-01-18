
export const resolvers = {
    Query:{
        // me: async (_, {}) => {

        // }
    },
    Mutation:{
        createUser: async (_, {input}:{input:any}, ctx) =>{
            const {email, password, confirmed} = input
            const newUser  = await ctx.noSqlModels.User.create({email, password, confirmed})
            return newUser
        }
    },
  

}