import express from 'express'

import { DeleteUser, GetAllUsers, GetUserById, Login, Register, UpdateReview, UpdateUser } from "../controllers/LoginControllers.js";

const LoginRouter=express.Router()

LoginRouter.get("/users", GetAllUsers);
LoginRouter.get("/users/:id", GetUserById);
LoginRouter.post("/register", Register);
LoginRouter.post("/login", Login);
LoginRouter.delete("/users/:id", DeleteUser);
LoginRouter.put("/users/:id", UpdateUser);
// LoginRouter.put("/users/updatereview/:id", UpdateReview);

export default LoginRouter;