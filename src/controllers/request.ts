import { Request, Response } from 'express';
import userRepository from "../repository/userRepository";
import { RequestType } from '../model/Request';

interface CreateRequestPayload {
  sender: string;
  recipient: string;
  type: RequestType;
}

async function createRequest(req: Request, res: Response) {
  try {
    const { sender, recipient, type }: CreateRequestPayload = req.body;

    if (!sender || !recipient || !type) {
      return res.status(400).json({
        success: false,
        message: "Missing required data",
      });
    }

    await userRepository.addRequestToUser(sender, recipient, type);
    return res.status(201).json({
      success: true,
      message: "Request created successfully",
    });
  } catch (error) {
    console.error("Error creating request:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export default createRequest;
