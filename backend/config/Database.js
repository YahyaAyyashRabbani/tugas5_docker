import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("tugas2", "root", "Yar117", {
  host: "34.122.9.37",
  dialect: "mysql",
});

export default db;
