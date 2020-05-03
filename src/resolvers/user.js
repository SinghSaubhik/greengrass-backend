import { getToken } from "../utils/utils";
import User from "../models/user";

// Queries
export const users = async (parent, args, { db }, info) => {
  const user = await User.find({}, { password: 0 });

  console.log(user);

  return user;
};

export const me = async (parent, args, context, info) => {};

// Mutations
export const signUp = async (parent, { input }, context, info) => {
  const email = input.email;
  const existingUser = await User.findOne({ email }, "email");
  // console.log(existingUser);

  // If user aleady exists
  if (existingUser != null) {
    throw new Error(`User with email: ${existingUser.email}, already exists`);
  }

  const user = await User.create(input);
  const token = getToken({ email, name: user.name });

  return { user, token };
};

export const signIn = async (parent, args, context, info) => {
  const user = await User.findOne({ email: args.email });
  console.log(user);

  if (user === null) {
    throw new Error(`User with email: ${args.email}, does not exists`);
  }

  const isPasswordMatch = user.password === args.password ? true : false;
  if (!isPasswordMatch) {
    throw new Error(`Password is incorrect`);
  }

  const token = getToken({ email: user.email, name: user.name });
  return { user, token };
};
