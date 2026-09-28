import createError from 'http-errors';
import { ArticleModel, IArticle } from '../models/article.model';

export class ArticleService {
  // Lấy danh sách: ẩn trường content đi để khớp chuẩn mẫu response danh sách
  static async getAllArticles(): Promise<IArticle[]> {
    return await ArticleModel.find({}).select('-content');
  }

  static async getArticleById(id: string): Promise<IArticle> {
    const article = await ArticleModel.findById(id);
    if (!article) {
      throw createError(404, 'Không tìm thấy tài nguyên với ID tương ứng');
    }
    return article;
  }

  static async createArticle(data: Partial<IArticle>): Promise<IArticle> {
    return await ArticleModel.create(data);
  }

  static async updateArticle(id: string, data: Partial<IArticle>): Promise<IArticle> {
    const updatedArticle = await ArticleModel.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    if (!updatedArticle) {
      throw createError(404, 'Không tìm thấy tài nguyên với ID tương ứng');
    }
    return updatedArticle;
  }

  static async deleteArticle(id: string): Promise<{ id: string }> {
    const deletedArticle = await ArticleModel.findByIdAndDelete(id);
    if (!deletedArticle) {
      throw createError(404, 'Không tìm thấy tài nguyên với ID tương ứng');
    }
    return { id: deletedArticle._id.toString() };
  }
}