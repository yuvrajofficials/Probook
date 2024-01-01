import express from "express";
import {
  registerController,
  loginController,
  testController
} from "../Controllers/authController.js";
import { requireSignIn } from '../Middleware/authMiddleware.js';
import { isAdmin } from "../Middleware/authMiddleware.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//test routes
router.get('/test',requireSignIn, isAdmin, testController);

export default router;