import { Router } from "express";
import { validateRegister } from "../validator/auth.validator.js";
import { register } from "../controllers/auth.controller.js";

const router = Router();

// register API
router.post('/register', validateRegister, register);





// exporting all routes from router
export default router;