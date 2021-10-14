import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsRepository } from './cat.repository';
import { CatsController } from './cats.controller';
import { Cat, CatSchema } from './cats.schema';
import { CatsService } from './cats.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatsController, CatsRepository],
  providers: [CatsService],
  //provider는 캡슐화 되기 때문에 다른 곳에서 사용할 수 없다. 현재의 provider를 다른곳에서 사용하려면 exports로 내보내야 한다.
  exports: [CatsService],
})
export class CatsModule {}
