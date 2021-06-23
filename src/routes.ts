import { Router } from "express";
import { CreateUserController } from "./constrollers/CreateUserController";

const router = Router();
const createUserController = new CreateUserController();

router.post("/users", createUserController.handle);

export { router };
