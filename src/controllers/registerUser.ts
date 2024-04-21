import { Request, Response } from 'express';
import { UserInput } from '../types/User';
import sighnInUser from '../services/SignUpUser';

async function createUser(req: Request, res: Response) {
  try {
    const userInput: UserInput = req.body;

    if (!userInput.name || !userInput.email || !userInput.password || !userInput.profileImage) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newUser = await sighnInUser(userInput);

    res.status(201).json(newUser);
  } catch (error) {
    // Handle errors
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Could not create user' });
  }
}

export default { createUser };
