import bcrypt from 'bcryptjs';
import User from '../model/User';
import { UserInput } from '../types/User';



class userRepository {
  async createUser(userInput: UserInput): Promise<User> {
    try {
      const { name, email, password, profileImage } = userInput;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ name, email, password: hashedPassword, profileImage });
      return user;
    } catch (error) {
      throw new Error('Could not create user');
    }
  }

  async getUserById(userId: string): Promise<User | null> {
    try {
      const user = await User.findById(userId);
      return user;
    } catch (error) {
      throw new Error('Could not find user');
    }
  }

}

export default new userRepository();
