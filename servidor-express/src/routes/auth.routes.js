import { Router } from "express";
import { login } from "../controllers/auth.controller.js";

const router = Router();

// Ruta para autenticar un usuario
router.post("/", login);

export default router;