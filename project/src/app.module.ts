// * 애플리케이션의 루트 모듈
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//app.module에서 의존성 주입
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
