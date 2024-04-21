import userRepository from '../repository/userRepository';
import { UserInput } from '../types/User';

// Example usage of createUser service
async function sighnInUser(createUserPAyload:UserInput) {

  try {
    const newUser = await userRepository.createUser(createUserPAyload);
    console.log('New user created:', newUser);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}


export default sighnInUser;
