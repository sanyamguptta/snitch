import express from 'express';
import router from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import passport from 'passport';
import { Strategy as GoogleStrategy} from 'passport-google-oauth20'
import { config } from './config/config.js';

const app = express();


// middlewares
// for reading data from the req.body
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
// for reading cookies
app.use(cookieParser());
// USING PROXY INSTEAD OF CORS PACKAGE
// app.use(cors({
//     origin: "http://localhost:5173",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true
// }))


// use passport as middleware
app.use(passport.initialize());

passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/auth/google/callback",
}, 
// callbacl
(accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}
))


// middleware for auth routes
app.use("/api/auth", router);




export default app;//