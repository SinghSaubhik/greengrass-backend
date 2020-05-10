import { gql, makeExecutableSchema } from "apollo-server";
import userTypeDef from "./user.schema";
import testTypeDef from "./test.schema";
import resolvers from "../resolvers/index";

const typeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const root = [typeDefs, userTypeDef, testTypeDef];

// const t = makeExecutableSchema({
//   typeDefs: root,
//   resolvers
// })

export default root;
