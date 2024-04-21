import mongoose from "mongoose";
const connectDB = async () => {
  const MONGODB_URL = process.env.DATABASE_MONGODB_URL!;
  console.log('MONGODB_URL', MONGODB_URL)
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("DB connected");
    
  } catch (error) {
    console.log('error whhile connectig to DB', error)
  }
};
export default connectDB;