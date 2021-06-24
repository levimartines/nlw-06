import { Router } from "express";
import { CreateUserController } from "./constrollers/CreateUserController";
import { CreateTagController } from "./constrollers/CreateTagController";
import { AuthenticateUserController } from "./constrollers/AuthenticateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);
router.post("/login", ensureAdmin, authenticateUserController.handle);

export { router };
