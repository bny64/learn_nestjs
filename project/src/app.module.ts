// * 애플리케이션의 루트 모듈
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './logger.middleware';

//app.module에서 의존성 주입
/**
 * providers	Nest 인젝터에 의해 인스턴스화 되고 적어도 이 모듈에서 공유될 수 있는 프로바이더
 * controllers	인스턴스화 되어야 하는 이 모듈에 정의된 컨트롤러 세트
 * imports	이 모듈에 필요한 프로바이더를 내보내는 가져온 모듈 목록
 * exports	이 모듈에서 제공하고 이 모듈을 임포트하는 다른 모듈에서 사용할 수 있어야 하는 프로바이더의 하위집합
 * 모듈은 기본적으로 프로바이더를 캡슐화합니다. 즉, 현재 모듈에 직접 포함되거나 가져온(import) 모듈에서 내보내지(export) 않은 프로바이더를 삽입할 수 없습니다.
 * 따라서 모듈에서 내보낸 프로바이더를 모듈의 공용 인터페이스 또는 API로 간주할 수 있습니다.
 * 다른 module의 provider를 사용하고 싶을 때는 app.module의 provider에 직접 넣어주는 것이 아니라
 * 해당 module에서 사용하는 provider를 export시켜서 사용한다.
 * app.module에서는 해당 module을 import 하는 것만으로도 해당 module의 provider를 사용할 수 있다.
 */
@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
  //provider에 등록되지 않으면(의존성 주입이 되지 않으면) 사용할 수 없다.
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    //forRoutes('cats') cats controller에 bind
    //forRoutes('*') 전체 controller에 bind
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
