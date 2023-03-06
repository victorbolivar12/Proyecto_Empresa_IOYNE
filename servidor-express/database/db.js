import { Sequelize } from "sequelize";
import { databaseName,user,password,host } from "./DataConection.js";

// const db = new Sequelize("empresa_ioyne", "postgres", "victor8680544", {
//   host: "localhost",
//   dialect: "postgres",
// });

const db = new Sequelize(databaseName, user, password, {
  host: host,
  dialect: "postgres",
});

export default  db