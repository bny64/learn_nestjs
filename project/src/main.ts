import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
// 핵심기능 NestFactory를 사용하여 Nest 애플리케이션 인스턴스를 생성하는 애플리케이션의 엔트리 파일입니다.
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //class-validator 모듈을 사용하기 위해 전역pipe로 입력
  app.useGlobalFilters(new HttpExceptionFilter());
  const port = process.env.PORT;
  await app.listen(port);
}

bootstrap();
