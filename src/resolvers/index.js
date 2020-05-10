import { Query as userQuery, Mutation as userMutation } from "./user";
import { testQuery, testMutation, testMappings } from "./tests";

const resolvers = {
  Query: {
    ...userQuery,
    ...testQuery,
  },
  Mutation: {
    ...userMutation,
    ...testMutation,
  },

  ...testMappings,
};

export { resolvers as default };
