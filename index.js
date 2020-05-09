import dotenv from "dotenv";
import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

import typeDefs from "./src/schema/index";
import resolvers from "./src/resolvers/index";

const PORT = process.env.PORT || 4000;
dotenv.config();

/*=====================================================================================================*/
// Connect to database
const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:27017`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "greengrass",
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(`Error while connecting to db: ${err}`));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: true,
  context: ({ req }) => {
    return { headers: req.headers };
  },
});

server.listen({ port: PORT }).then((args) => {
  console.log(`Listening on: ${args.port}`);
});
