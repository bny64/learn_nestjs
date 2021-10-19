import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatsRepository } from 'src/cats/cats.repository';
import { CommentsRepository } from '../comments.repository';
import { Comments } from '../comments.schema';
import { CommentsCreateDto } from '../dto/comments.create.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments.name) private readonly commentsModel: Model<Comments>,
    private readonly catsRepository: CatsRepository,
    private readonly commentsRepository: CommentsRepository,
  ) {}

  async getAllComments() {
    return this.commentsRepository.getAllComments();
  }

  async createComment(id: string, commentData: CommentsCreateDto) {
    try {
      const targetCat = await this.catsRepository.findCatByIdWithoutPassword(
        id,
      );
      const { contents, author } = commentData;

      //변조 가능성 때문에 추가
      const validateAuthor =
        await this.catsRepository.findCatByIdWithoutPassword(author);

      const newComment = new this.commentsModel({
        author: validateAuthor._id,
        contents,
        info: targetCat._id,
      });
      return await newComment.save();
    } catch (err) {
      throw new BadRequestException(err.message);
    }
  }

  async plusLike(id: string) {
    try {
      const comment = await this.commentsRepository.getCommentById(id);
      comment.likeCount += 1;
      return await comment.save();
    } catch (err) {}
  }
}
