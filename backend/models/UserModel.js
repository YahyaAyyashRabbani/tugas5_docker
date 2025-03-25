import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// Membuat tabel "user"
const Catatan = db.define(
  "note", // Nama Tabel
  {
    judul: Sequelize.STRING,
    isi: Sequelize.STRING,
  }
);

db.sync().then(() => console.log("Database synced"));

export default Catatan;
