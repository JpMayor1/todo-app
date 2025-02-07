import { Request, Response } from "express";
import UserModel from "../../models/user.model";
import bcrypt from "bcryptjs"

export const register = async (request: Request, response: Response) => {
    try {
        const { username, password } = request.body;

        if(!username){
            response.status(400).json({ message: "Username is required"})
            return
        }
      
        if(!password){
            response.status(400).json({ message: "Password is required"})
            return
        }

        const hasUsername = await UserModel.findOne({username})

        if(hasUsername) {
            response.status(409).json({ message: "Already has username"})
            return
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const account = await UserModel.create({
            username,
            password: hashedPassword,
        })

        if(!account) {
            response.status(409).json({ message: "Error creating account"})
            return
        }

        response.status(201).json({ message: "Account registered successfully"})

    } catch (error) {
        console.error("Error in registering account", error);
        response.status(500).json({ message: "Error in registering account"})
    }
}