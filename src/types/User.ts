export interface UserInput {
  name: string;
  email: string;
  password: string;
  profileImage?: string;
}

export interface SignInPayload {
  email: string;
  password: string;
}
