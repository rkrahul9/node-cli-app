import commander from "commander"
import db from "./config/db"
import {
  listValuesFromStore,
  addValueToStore,
  getValueFromStore,
  removeValueFromStore
} from "./logic"

commander.version("0.0.1").description("A Custom Cli Application")
commander.command("").action(() => commander.help())
commander
  .command("add <key> <value>")
  .description("Add a value to store")
  .action((key, value) => {
    addValueToStore(key, value)
  })

commander
  .command("list")
  .description("List values from store")
  .action(() => listValuesFromStore())

commander
  .command("get <key>")
  .description("Get value according to key from store")
  .action(key => getValueFromStore(key))

commander
  .command("remove <key>")
  .description("Remove value according to key from store")
  .action(key => removeValueFromStore(key))

commander.parse(process.argv)
