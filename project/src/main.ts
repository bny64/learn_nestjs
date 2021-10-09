import { HttpExceptionFilter } from 'src/http-exception.filter';
// 핵심기능 NestFactory를 사용하여 Nest 애플리케이션 인스턴스를 생성하는 애플리케이션의 엔트리 파일입니다.
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port: number = 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(port);
}
bootstrap();
