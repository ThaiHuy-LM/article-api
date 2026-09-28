import { z } from 'zod';

const articleFields = {
  title: z.string({ required_error: 'Title là bắt buộc' }).min(1, 'Title không được để trống'),
  summary: z.string({ required_error: 'Summary là bắt buộc' }).min(1, 'Summary không được để trống'),
  content: z.string({ required_error: 'Content là bắt buộc' }).min(1, 'Content không được để trống'),
  author: z.string({ required_error: 'Author là bắt buộc' }).min(1, 'Author không được để trống'),
  category: z.string({ required_error: 'Category là bắt buộc' }).min(1, 'Category không được để trống'),
  tags: z.array(z.string()).optional(),
  isPublished: z.boolean().optional(),
};

export const createArticleSchema = z.object({
  body: z.object(articleFields),
});

export const updateArticleSchema = z.object({
  body: z.object(articleFields).partial(),
});