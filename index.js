import dotenv from "dotenv";
import { gql, ApolloServer } from "apollo-server";
import mongoose from "mongoose";

import User from "./src/models/user";

import typeDefs from "./src/schema/index";
import { resolvers } from "./src/resolvers/index";

const PORT = process.env.PORT || 4000;
dotenv.config();

/*=====================================================================================================*/
// Connect to database
const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:27017`;
console.log(uri);

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "greengrass",
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(`Error while connecting to db: ${err}`));

const server = new ApolloServer({ typeDefs, resolvers, cors: true });
server.listen({ port: PORT }).then((args) => {
  console.log(`Listening on: ${JSON.stringify(args.port)}`);
});
