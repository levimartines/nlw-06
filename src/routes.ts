import { Router } from "express";
import { CreateUserController } from "./constrollers/CreateUserController";
import { CreateTagController } from "./constrollers/CreateTagController";

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post("/users", createUserController.handle);
router.post("/tags", createTagController.handle);

export { router };
