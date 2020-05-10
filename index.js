import dotenv from "dotenv";
import { ApolloServer } from "apollo-server";

import typeDefs from "./src/schema/index";
import resolvers from "./src/resolvers/index";

import connectDatabase from "./database";

const PORT = process.env.PORT || 4000;

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
  context: ({ req }) => {
    return { headers: req.headers };
  },
});

connectDatabase()
  .then(() => {
    server.listen({ port: PORT }).then((args) => {
      console.log(`Listening on: ${args.port}`);
    });
  })
  .catch((error) =>
    console.log(`Error occured in database connection, err: ${error}`)
  );
