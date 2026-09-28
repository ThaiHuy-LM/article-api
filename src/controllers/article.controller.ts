import { Request, Response, NextFunction } from 'express';
import { ArticleService } from '../services/article.service';

export class ArticleController {
  static getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const articles = await ArticleService.getAllArticles();
      res.status(200).json({
        success: true,
        message: 'Lấy danh sách bài viết thành công',
        data: articles,
      });
    } catch (error) {
      next(error);
    }
  };

  static getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const article = await ArticleService.getArticleById(req.params.id);
      res.status(200).json({
        success: true,
        message: 'Lấy chi tiết bài viết thành công',
        data: article,
      });
    } catch (error) {
      next(error);
    }
  };

  static create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newArticle = await ArticleService.createArticle(req.body);
      res.status(201).json({
        success: true,
        message: 'Tạo bài viết mới thành công',
        data: newArticle,
      });
    } catch (error) {
      next(error);
    }
  };

  static update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updatedArticle = await ArticleService.updateArticle(req.params.id, req.body);
      res.status(200).json({
        success: true,
        message: 'Cập nhật bài viết thành công',
        data: updatedArticle,
      });
    } catch (error) {
      next(error);
    }
  };

  static remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deleteResult = await ArticleService.deleteArticle(req.params.id);
      res.status(200).json({
        success: true,
        message: 'Xóa bài viết thành công',
        data: deleteResult, // { id: "..." }
      });
    } catch (error) {
      next(error);
    }
  };
}