import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { AuthModule } from 'src/auth/auth.module';
import { CatsRepository } from './cats.repository';
import { CatsController } from './controller/cats.controller';
import { Cat, CatSchema } from './cats.schema';
import { CatsService } from './service/cats.service';
import { Comments, CommentsSChema } from 'src/comments/comments.schema';

@Module({
  imports: [
    MulterModule.register({
      dest: './upload', //저장되는 경로
    }),
    MongooseModule.forFeature([
      { name: Cat.name, schema: CatSchema },
      { name: Comments.name, schema: CommentsSChema },
    ]),
    forwardRef(() => AuthModule), //서로간에 의존할 때 발생하는 순환 종속성을 해결하기 위한 방법
  ],
  //컨트롤러는 항상 모듈에 속하므로 @Module() 데코레이터 내에 controllers 배열을 포함합니다.
  controllers: [CatsController],
  providers: [CatsService, CatsRepository],
  //provider는 캡슐화 되기 때문에 다른 곳에서 사용할 수 없다. 현재의 provider를 다른곳에서 사용하려면 exports로 내보내야 한다.
  //public이 되어 다른 곳에서 사용 가능한 상태
  exports: [CatsService, CatsRepository],
})
export class CatsModule {}
