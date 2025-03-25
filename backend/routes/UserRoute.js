import express from "express";
import { getUsers, createUser, updateUser, deleteUser } from "../controllers/UserController.js";

const router = express.Router();

router.get("/notes", getUsers);
router.post("/add-notes", createUser);
router.put("/note/:id", updateUser);
router.delete("/note/:id", deleteUser);

export default router;
