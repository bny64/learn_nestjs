import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, //이 옵션을 사용하면 다른 곳에서 모듈을 가져올 필요없이 global로 사용할 수 있다.
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
  ],
  controllers: [AppController],
})
export class AppModule {}
