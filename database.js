import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:27017`;

const connectDatabase = () => {

  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "greengrass",
  });
};

export default connectDatabase;
