import { Router } from "express";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { CreateUserController } from "./constrollers/CreateUserController";
import { CreateTagController } from "./constrollers/CreateTagController";
import { AuthenticateUserController } from "./constrollers/AuthenticateUserController";
import { CreateComplimentController } from "./constrollers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);
router.post("/login", authenticateUserController.handle);

export { router };
