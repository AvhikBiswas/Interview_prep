import { RequestType } from "../model/Request";
import userRepository from "../repository/userRepository";

async function createRequest(sender: string, recipient: string, type: RequestType) {
  try {
    await userRepository.addRequestToUser(sender, recipient, type);
    return true;
  } catch (error) {
    console.error("Error creating request:", error);
    return false;
  }
}

export default createRequest;
