import mongoose from "mongoose";
import chalk from "chalk";
import Store from "./model/store";
const db = mongoose.connection;

export const getValueFromStore = async key => {
  const storeValue = await Store.find({ key: key });
  console.log(chalk.green.bold("......Store value for key => %s......"), key);
  console.log(chalk.yellow(storeValue));
  db.close();
};

export const listValuesFromStore = async () => {
  const storeValues = await Store.find({});
  console.log(chalk.green.bold("......List of values from store......"));
  console.log(chalk.yellow(storeValues));
  db.close();
};

export const addValueToStore = async (key, value) => {
  const store = new Store({ key, value });
  await store.save();
  console.log(chalk.green.bold("......Values saved successfully......"));
  db.close();
};

export const removeValueFromStore = async key => {
  await Store.deleteMany({ key: key });
  console.log(
    chalk.green.bold(
      "......Values regarding key %s removed successfully......"
    ),
    key
  );
  db.close();
};
