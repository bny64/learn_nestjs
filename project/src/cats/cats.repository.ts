import { HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CommentsSChema } from 'src/comments/comments.schema';
import { Cat } from './cats.schema';
import { CatRequestDto } from './dto/cats.request.dto';
import * as mongoose from 'mongoose';

export class CatsRepository {
  //Cat.name은 Cat function의 이름(ES6)
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  async findByIdAndUpdateImg(id: string, fileName: string) {
    const cat = await this.catModel.findById(id);
    cat.imgUrl = `http://localhost:8000/media/${fileName}`;

    const newCat = await cat.save();
    //console.log(newCat);
    return newCat.readOnlyData;
  }

  async findCatByIdWithoutPassword(
    catId: string | Types.ObjectId,
  ): Promise<Cat | null> {
    const cat = await this.catModel.findById(catId).select('-password');
    //password를 제외한 모든 필드를 가져온다. this.catModel.findById(catId).select('email name'); => 특정 필드만 가져온다.
    return cat;
  }

  async findCatByEmail(email: string): Promise<Cat | null> {
    const cat = await this.catModel.findOne({ email });
    return cat;
  }
  async existsByEmail(email: string): Promise<boolean> {
    try {
      const result = await this.catModel.exists({ email });
      return result;
    } catch (error) {
      throw new HttpException('db error', 400);
    }
  }

  async create(cat: CatRequestDto): Promise<Cat> {
    return await this.catModel.create(cat);
  }

  async findAll() {
    //async findAll(): Promise<Cat[]> {
    const CommentsModel = mongoose.model('comments', CommentsSChema);

    const result = await this.catModel
      .find()
      .populate('comments', CommentsModel);

    return result;
  }
}
