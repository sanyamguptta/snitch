import userModel from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from "../config/config.js";


// function for creating token & sendinb back valid response
async function sendTokenResponse(user, res, message) {
    
    // creating token after saving user's credential into the DB
    const token = await jwt.sign({
        id: user._id
    }, 
    config.JWT_SECRET, 
    {
        expiresIn: "7d",
    })

    // setting token in cookies
    res.cookie("token", token);

    // after successfull registeration of user
    // sending response with appropriate status code
    res.status(200).json({ 
        message,
        success: true,
        user: {
            id: user._id,
            fullname: user.fullname,
            email: user.email,
            contact: user.contact,
            role: user.role
        }
    })

}

export const register = async (req, res) => {

    const { fullname, email, password, contact, isSeller } = req.body;

    try { 
        const isUserAlreadyExits = await userModel.findOne({
            $or: [
                { email },
                { contact }
            ]
        });

        if(isUserAlreadyExits) {
            return res.status(400).json({
                message: 'User already exists with this email or contact',
            })
        };
    
        const hash = await bcrypt.hash(password, 10);
    
        // saving user data in DB
        const user = await userModel.create({
            fullname,
            email, 
            password: hash,
            contact,
            role: isSeller ? "buyer" : "seller",
        });

        // calling function for generating token & setting it into cookies & sending final response
        sendTokenResponse(user, res, "User registered successfully!");

    }
    catch(err) {
        console.log(err);
        return res.status(500).json({
            message: 'Server error'
        })
    }
    
}

export const login = async (req, res) => {

    const { email, password } = req.body;

    try { 
        const user = await userModel.findOne({
            $or: [
                { email },
            ]
        });

        if(!user) {
            return res.status(400).json({
                message: 'Invalid email or password',
            })
        };
    
        const isPasswordMatched = bcrypt.compare(password, user.password);

        if(!isPasswordMatched) {
            return res.status(400).json({
                message: 'Invalid email or password',
            })
        }

        // calling function for generating token & setting it into cookies & sending final response
        sendTokenResponse(user, res, "User logged in successfully!");

    }
    catch(err) {
        console.log(err);
        return res.status(500).json({
            message: 'Server error'
        })
    }
}


export const googleCallback = async (req, res) => {

    // prints logged in user data
    console.log(req.user);
    // after printing redirecting to the home page
    res.redirect('http://localhost:5173/');

}