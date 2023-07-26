/* import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

// Describe data and queries to GraphQL require
const typeDefs = `
  type Book {
    title: String
    author: String
  }

  {
    type Query {
      books: [Book!]!
    }
  `;

// Resolvers to data - way to create queries
const resolvers = {
  Query: {
    books: () => books,
  },
};

// Initialize Apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Inicialize server
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
*/

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const persons = [
  {
    name: 'Lorena',
    phone: '5547660831',
  },
  {
    name: 'Ana',
    phone: '5544668831',
  },
];

const typeDefs = `
  type Book {
    title: String
    author: String
  }
  type Person {
    name: String
    phone: String
  }
  type Query {
    personCount: Int
    allPersons: [Person]
    books: [Book]
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello, GraphQL!',
    books: () => books,
    personCount: () => persons.length,
    allPersons: () => persons,
  },
};

// server.js

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
