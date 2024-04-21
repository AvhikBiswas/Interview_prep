import { generateUserAccessToken } from "../auth/jwt";
import userRepository from "../repository/userRepository";
import { SignInPayload } from "../types/User";
import bcrypt from 'bcrypt';


async function signInUser(signInPayload: SignInPayload): Promise<string> {
    const { email, password } = signInPayload;

    const user = await userRepository.getUserByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }
    const token = generateUserAccessToken({id:user.id,email:user.email});
    return token;
  }

  export default signInUser;