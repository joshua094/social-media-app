import express from "express";
import { getAllUser, login, signup } from "../controllers/userController";


const routers = express.Router();

routers.get('/', getAllUser);
routers.post('/signup', signup)
routers.post('/login', login)


export default routers;