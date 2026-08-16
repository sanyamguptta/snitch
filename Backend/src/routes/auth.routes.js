import { Router } from "express";
import { validateLoginUser, validateRegisterUser } from "../validator/auth.validator.js";
import { googleCallback, login, register } from "../controllers/auth.controller.js";
import passport from "passport";

const router = Router();

// register API
router.post('/register', validateRegisterUser, register);

// login API
router.post('/login', validateLoginUser, login);

// GET - /auth/google
router.get('/google', 
    passport.authenticate("google", {
        scope: [
            "profile",
            "email",
        ]
    })
)

// GET - /auth/google/callback
// this api receives the auth code
router.get('/google/callback', 
    // this lines is used to provide data in exchange of auth code
    passport.authenticate("google", {
        session: false,
    }),
    googleCallback
)

// exporting all routes from router
export default router;