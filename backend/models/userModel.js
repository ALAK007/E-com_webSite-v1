import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "Please enter your first name"],
        trim: true,
       },
       last_name: {
        type: String,
        required: [true, "Please enter your last name"],
        trim: true
       },
       email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        lowercase: true,
        validator: [isEmail, "Please enter a valide email"],
        trim: true
       },
       role: {
        type: String,
        enum: ['admin', 'manager'],
        default: 'manager' 
       },
       user_name: {
        type: String,
        required: [true, "Please enter a username"],
        unique: true,
        minlength: [5, "Minimum user_name length is 5 characters"]
       },
       password: {
        type: String,
        required: [true, "Please enter a password"],
        trim: true,
        minlength: [7, "Minimum password length is 7 characters"]
       },
       lastLogin: { 
        type: Date,
        default: Date.now
       }, 
       active: { 
        type: Boolean, 
        default: true 
       },
       },
       { 
        timestamps: true 
       } 
) 

const User = mongoose.model('User', userSchema);

export default User;

