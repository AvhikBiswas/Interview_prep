import { Request, Response } from 'express';
import { SignInPayload } from "../types/User";
import sighnInUser from '../services/SignUpUser';
import signInUser from '../services/SignInUser';

async function signInUserController(req: Request, res: Response) {
  try {
    // Extract data from request body
    const { email, password }: SignInPayload = req.body;

    if (!email) {
      throw new Error('Email is required');
    }
    if (!password) {
      throw new Error('Password is required');
    }

    const token = await signInUser({ email, password });

    return res.status(200).json({ token });
  } catch (error) {
    console.error('Error signing in user:', error);
    return res.status(401).json({ message: "Somthing went wrong"});
  }
}

export default signInUserController;
