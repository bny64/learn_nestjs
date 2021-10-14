import { HttpExceptionFilter } from './common/exceptions/http-exception.filter';
// 핵심기능 NestFactory를 사용하여 Nest 애플리케이션 인스턴스를 생성하는 애플리케이션의 엔트리 파일입니다.
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //class-validator 모듈을 사용하기 위해 전역pipe로 입력
  app.useGlobalFilters(new HttpExceptionFilter());

  //API 문서 만들 때 추가
  //swagger module
  const config = new DocumentBuilder()
    .setTitle('C.I.C') //API 타이틀
    .setDescription('cat') //API 개요
    .setVersion('1.0.0') //버전
    .addTag('cats') //태그
    .build();

  //API 문서를 사용하기 위한 셋팅
  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  //CORS 셋팅
  app.enableCors({
    origin: true, //어떤 URL에서 접근할 건지, 개발단계에서는 모두 허용으로 true로 변경 후 배포 단계에서는 특정 url 설정
    credentials: true, //권한 허용
  });

  const port = process.env.PORT;
  await app.listen(port);
}

bootstrap();
