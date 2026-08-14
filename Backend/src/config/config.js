import dotenv from 'dotenv';
dotenv.config();


// to avoid error when MONGO_URI is undefined / not defined in application
if(!process.env.MONGO_URI) {
    throw new Error('MONGO-URI is not defined in the environment variables');
}
// to avoid error when JWT SECRET is undefined / not defined in application
if(!process.env.JWT_SECRET) {
    throw new Error('JWT SECRET is not defined in the environmental variables')
}


export const config = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
}