import express from "express";
const router = express.Router();
import UserController from "../controllers/UserController";
import { authMiddleware } from "../middlewares/authMiddleware";
const userController = new UserController();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.put("/edit", authMiddleware, userController.editUser);
router.delete("/delete", authMiddleware, userController.deleteUser);

export default router;
