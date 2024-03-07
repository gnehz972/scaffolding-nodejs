import { Schema, model, connect } from "mongoose";

import config from "./config";
import { getServer } from "./server";
import { logger } from "./util/logger";
import MongooseClient from "./clients/MongooseClient";
import MigrationClient from "./clients/MigrationClient";

// 1. Create an interface representing a document in MongoDB.
interface IUser {
  name: string;
  email: string;
  avatar?: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});

// 3. Create a Model.
const User = model<IUser>("User", userSchema);

const startDb = async () => {
  await MongooseClient.connect();
  await MigrationClient.connect();

  // await connect('mongodb://127.0.0.1:27017/test');
  logger.info(`mongodb started on port:27017`);

  // const user = new User({
  //   name: 'Bill',
  //   email: 'bill@initech.com',
  //   avatar: 'https://i.imgur.com/dM7Thhn.png'
  // });
  // await user.save();

  // console.log(user.email); //
};

getServer().listen(config.port, () => {
  logger.info(`Server started on port:${config.port}`);
  startDb().catch((err) => console.log(err));
});
