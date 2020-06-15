import { GraphQLServer } from "graphql-yoga"
import dotenv from "dotenv";
import morgan from "morgan";

import typeDefs from "./src/schema/index";
import resolvers from "./src/resolvers/index";
import connectDatabase from "./database";

const PORT = process.env.PORT || 4000;

dotenv.config();

const logInput = async (resolve, root, args, context, info) => {
  console.log(`1. logInput: ${JSON.stringify(args)}`)
  const result = await resolve(root, args, context, info)
  return result
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  cors: true,
  context: req => req.request.headers
});

connectDatabase()
  .then(() => {
    server.start({ cors: true, port: PORT }, () => console.log(`Listening on port ${PORT}`)
    )
  })
  .catch((error) =>
    console.log(`Error occured in database connection, err: ${error}`)
  );
