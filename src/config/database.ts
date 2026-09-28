import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/article_db';

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Kết nối MongoDB thành công');
  } catch (error) {
    console.error('Kết nối MongoDB thất bại:', error);
    process.exit(1);
  }
};