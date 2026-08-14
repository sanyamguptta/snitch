import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
        unique: true,
    }, 
    role: {
        type: String,
        enum: ["buyer", "seller"],
        default: "buyer"
    }
})


const userModel = mongoose.model('user', userSchema);

export default userModel; 