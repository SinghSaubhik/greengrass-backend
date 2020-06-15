import { GraphQLServer } from "graphql-yoga"
import dotenv from "dotenv";

import typeDefs from "./src/schema/index";
import resolvers from "./src/resolvers/index";
import connectDatabase from "./database";

const PORT = process.env.PORT || 4000;

dotenv.config();


const server = new GraphQLServer({
  typeDefs,
  resolvers,
  cors: true,
  context: req => req.request
});

connectDatabase()
  .then(() => {
    server.start({
      cors: true,
      port: PORT
    },
      () => console.log(`Listening on port ${PORT}`)
    )
  })
  .catch((error) =>
    console.log(`Error occured in database connection, err: ${error}`)
  );
