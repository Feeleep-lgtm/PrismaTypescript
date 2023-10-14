import { Router } from "express";
import { userController } from "../controllers/useController";

const route = Router()

route.get('/user', userController.index);
route.post('/new', userController.createUser)


export default route;