import { BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Comments } from './comments.schema';

export class CommentsRepository {
  constructor(
    @InjectModel(Comments.name) private readonly CommentModel: Model<Comments>,
  ) {}

  async getAllComments(): Promise<Comments[] | null> {
    try {
      const comments = await this.CommentModel.find();
      return comments;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async getCommentById(id: string): Promise<Comments | null> {
    try {
      const comment = await this.CommentModel.findById(id);
      return comment;
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }
}
