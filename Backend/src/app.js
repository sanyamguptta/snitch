import express from 'express';
import router from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';

const app = express();


// middlewares
// for reading data from the req.body
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
// for reading cookies
app.use(cookieParser());


export default app;//