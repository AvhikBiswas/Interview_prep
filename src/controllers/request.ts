import { Request, Response } from 'express';
import { RequestType } from "../model/Request";
import userRepository from "../repository/userRepository";

interface ApiResponse {
  success: boolean;
  message: string;
  statusCode: number;
}

async function createRequest(req: Request, res: Response) {
  const { sender, recipient, type }: { sender: string, recipient: string, type: RequestType } = req.body;

  if (!sender || !recipient || !type) {
    return res.status(400).json({
      success: false,
      message: "Missing required data",
    });
  }

  try {
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
