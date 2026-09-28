import { Router } from 'express';
import { ArticleController } from '../controllers/article.controller';
import { validate } from '../middlewares/validate.middleware';
import { createArticleSchema, updateArticleSchema } from '../validations/article.validation';

const router = Router();

router.route('/')
  .get(ArticleController.getAll)
  .post(validate(createArticleSchema), ArticleController.create);

router.route('/:id')
  .get(ArticleController.getById)
  .put(validate(updateArticleSchema), ArticleController.update)
  .delete(ArticleController.remove);

router.get('/test-error-500', (req, res, next) => {
  try {
    throw new Error('Database connection lost unexpectedly');
  } catch (error) {
    next(error); 
  }
});
export default router;