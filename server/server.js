import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
    schema {
        query: Query
    }
    type Query {
        greeting: String
    }
`

const resolvers = {
    Query: {
        greeting: () => 'Hello World',
    }
}

const server = new ApolloServer({typeDefs, resolvers});
const url = 9000
server.listen({port:9000});
console.log(`Server listening on port ${url}`);