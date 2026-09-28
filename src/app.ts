import express, { Application } from 'express';
import cors from 'cors';
import articleRoutes from './routes/article.route';
import { notFoundHandler } from './middlewares/notFound.middleware';
import { errorHandler } from './middlewares/error.middleware';

const app: Application = express();

app.use(cors());
app.use(express.json());

// Đăng ký Route cho Articles
app.use('/api/articles', articleRoutes);

// Bắt lỗi 404 Route
app.use(notFoundHandler);

// Global Error Handler
app.use(errorHandler);

export default app;