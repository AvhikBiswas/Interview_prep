import jwt from "jsonwebtoken";

interface JwtUserPayload {
  id: string;
  email: string;
}

export function generateUserAccessToken(user: JwtUserPayload): string {
  return jwt.sign(
    { userId: user.id, email: user.email },
    process.env.JWT_SECRET as string
  );
}
