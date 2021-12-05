// auth controllers
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserData from '../models/authUser.js';
import dotenv from 'dotenv';

dotenv.config();

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const isExistingUser = await UserData.findOne({ email }) || await UserData.findOne({ username: email });

        if(!isExistingUser) return res.status(404).json({ message: "User doesn't exists." });

        const isPasswordCorrect = await bcrypt.compare(password, isExistingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

        const token = jwt.sign({ email: isExistingUser.email, id: isExistingUser._id }, process.env.SECRET_TOKEN, { expiresIn: "1h" });

        res.status(200).json({ result: isExistingUser, token });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong." });
        console.log(error);
    }
}

export const registerUser = async (req, res) => {
   const { username, email, password, confirmPassword } = req.body;

   try {
       const isExistingUser = await UserData.findOne({ email });

       if(isExistingUser) return res.status(400).json({ message: "A user with that email already exists!" });

       if(password !== confirmPassword) return res.status(400).json({ message: "Password don't match!" });

       const hashPassword = await bcrypt.hash(password, 12);

       const result = await UserData.create({ email, password: hashPassword, username });
       
       const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRET_TOKEN, { expiresIn: "1h" });

       res.status(201).json({ result, token });

   } catch (error) {
    res.status(500).json({ message: "Something went wrong." });

    console.log(error);
   }
}