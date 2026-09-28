import { Schema, Document, model } from 'mongoose';

export interface IArticle extends Document {
  title: string;
  summary: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const articleSchema = new Schema<IArticle>(
  {
    title: { type: String, required: [true, 'Title là bắt buộc'], trim: true },
    summary: { type: String, required: [true, 'Summary là bắt buộc'], trim: true },
    content: { type: String, required: [true, 'Content là bắt buộc'], trim: true },
    author: { type: String, required: [true, 'Author là bắt buộc'], trim: true },
    category: { type: String, required: [true, 'Category là bắt buộc'], trim: true },
    tags: { type: [String], default: [] },
    isPublished: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const ArticleModel = model<IArticle>('Article', articleSchema);