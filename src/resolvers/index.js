import { users, signUp, signIn } from "./user";

const resolvers = {
  Query: {
    users,
  },
  Mutation: {
    signUp,
    signIn,
  },
};

export { resolvers as default };
