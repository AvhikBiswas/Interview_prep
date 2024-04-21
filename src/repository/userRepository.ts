import { RequestType } from "../model/Request";
import User from "../model/User";
import { UserInput } from "../types/User";
import bcrypt from "bcrypt";

class UserRepository {
  async createUser(userInput: UserInput): Promise<User> {
    try {
      const { name, email, password, profileImage } = userInput;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        profileImage,
      });
      return user;
    } catch (error) {
      throw new Error("Could not create user");
    }
  }

  async getUserByEmail(email: string): Promise<User | null> {
    try {
      const user = await User.findOne({ email });
      return user;
    } catch (error) {
      throw new Error("Could not find user");
    }
  }

  async addRequestToUser(senderId: string, recipientId: string, type: RequestType) {
    console.log('senderId------------->', senderId, type)
    try {
      return await User.updateOne(
        { _id: senderId },
        { $push: { requests: { recipient: recipientId, type } } }
      );
    } catch (error) {
      console.error("Error adding request to user:", error);
      throw new Error("Could not add request to user");
    }
  }

}

export default new UserRepository();

