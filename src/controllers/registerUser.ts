import { Request, Response } from 'express';
import { UserInput } from '../types/User';
import sighnUpUser from '../services/SignUpUser';

const  registerUser=async(req: Request, res: Response) =>{
  try {
    const userInput= req.body;
    if (!userInput.name || !userInput.email || !userInput.password || userInput.profileImage) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newUser = await sighnUpUser(userInput);
    console.log('newUser', newUser)
    return res.status(201).json({User:newUser});
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: 'Could not create user' });
  }
}

export default registerUser ;
