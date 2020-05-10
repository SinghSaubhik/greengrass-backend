import { getToken, getUserInfoFromHeaders } from "../utils/utils";
import User from "../models/user";

/*============================================ Queries ==============================================*/
const Query = {
  users: async (parent, args, context, info) => {
    const user = await User.find({}, { password: 0 });
    return user;
  },
  me: async (parent, args, { headers }, info) => {
    console.log(headers);

    const userInfo = getUserInfoFromHeaders(headers);
    const user = User.findById(userInfo.id, { password: 0 });
    return user;
  },
};

/*============================================ Mutations ===========================================*/
const Mutation = {
  signUp: async (parent, { input }, context, info) => {
    const email = input.email;
    const existingUser = await User.exists({ email });
    console.log(existingUser);

    // If user aleady exists
    if (existingUser) {
      throw new Error(`User with email: ${email}, already exists`);
    }

    const user = await User.create(input);
    console.log(user);

    const id = user._id;
    const token = getToken({ id, email, name: user.name });

    return { user, token };
  },

  // Sign in
  signIn: async (parent, args, context, info) => {
    const user = await User.findOne({ email: args.email });
    console.log(user);

    if (user === null) {
      throw new Error(`User with email: ${args.email}, does not exists`);
    }

    const isPasswordMatch = user.password === args.password ? true : false;
    if (!isPasswordMatch) {
      throw new Error(`Password is incorrect`);
    }

    const id = user._id;
    const token = getToken({ id, email: user.email, name: user.name });
    return { user, token };
  },
};

export { Query, Mutation };
