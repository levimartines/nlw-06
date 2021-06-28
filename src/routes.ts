import { Router } from "express";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { CreateUserController } from "./constrollers/CreateUserController";
import { CreateTagController } from "./constrollers/CreateTagController";
import { CreateComplimentController } from "./constrollers/CreateComplimentController";
import { ListUserSendComplimentsController } from "./constrollers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./constrollers/ListUserReceiveComplimentsController";
import { AuthenticateUserController } from "./constrollers/AuthenticateUserController";

const router = Router();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const authenticateUserController = new AuthenticateUserController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);
router.get("/users/compliments/send", ensureAuthenticated, listUserSendComplimentsController.handle);
router.get("/users/compliments/receive", ensureAuthenticated, listUserReceiveComplimentsController.handle);
router.post("/login", authenticateUserController.handle);

export { router };
