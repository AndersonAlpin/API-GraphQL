import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
require('dotenv').config();

function startServer({ typeDefs, resolvers}) {
  mongoose.connect(process.env.DB_URI);

  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => console.log(`Server is running at ${url}`));
}

export default startServer;