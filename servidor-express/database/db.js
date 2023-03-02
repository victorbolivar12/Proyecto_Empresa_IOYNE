import { Sequelize } from "sequelize";

// const databaseName = "empresa_ioyne"
// const user = "postgres"
// const password = ""

const db = new Sequelize("empresa_ioyne", "postgres", "victor8680544", {
  host: "localhost",
  dialect: "postgres",
});

export default  db