import userRepository from '../repository/userRepository';
import { UserInput } from '../types/User';

async function sighnUpUser(createUserPAyload:UserInput) {
  try {
    const newUser = await userRepository.createUser(createUserPAyload);
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
  }
}


export default sighnUpUser;
