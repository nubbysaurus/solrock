import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = `#graphql
  type Party {
    fun: Boolean,
    ongoing: Boolean,
    motto: String
  }

  type Query {
    parties: [Party]
  }
`;

const parties = [
  {
    fun: false,
    motto: 'This party sucks. ):',
    ongoing: false,
  },
  {
    fun: true,
    motto: 'Don\'t stop \'till you drop!',
    ongoing: true,
  },
];

const resolvers = {
  Query: {
    parties: () => parties,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log('Welcome!');
